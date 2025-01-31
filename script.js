// 問題データ
const problems = {
    beginner: [
        {
            question: "\\[\\int_{1}^{\\infty} \\frac{1}{x^2} dx\\]",
            choices: [1, 2, "\\frac{3}{2}", "発散", "3", "\\frac{1}{2}"],
            correctIndex: 0,
            explanation: "\\[\\lim_{c \\to \\infty} \\int_{1}^{c} x^{-2} dx = \\lim_{c \\to \\infty} \\left[-x^{-1}\\right]_1^c = \\lim_{c \\to \\infty} \\left(-\\frac{1}{c} + 1\\right) = 1\\]"
        },
        {
            question: "\\[\\int_{0}^{1} \\frac{1}{\\sqrt{x}} dx\\]",
            choices: [2, 1, "\\frac{3}{2}", "発散", "\\frac{1}{2}", "\\sqrt{2}"],
            correctIndex: 0,
            explanation: "\\(x=0\\) で被積分関数が発散します。\\[\\lim_{c \\to +0} \\int_{c}^{1} x^{-1/2} dx = \\lim_{c \\to +0} \\left[2\\sqrt{x}\\right]_c^1 = 2(1 - 0) = 2\\]"
        },
        {
            question: "\\[\\int_{0}^{\\infty} \\frac{1}{1+x^2} dx\\]",
            choices: ["\\frac{\\pi}{2}", "\\pi", "2 \\pi", "1", "\\infty", "0"],
            correctIndex: 0,
            explanation: "\\[\\int_{0}^{\\infty} \\frac{1}{1+x^2} dx = \\lim_{c\\to \\infty}\\int_{0}^{c} \\frac{1}{1+x^2} dx\\] \\[ = \\lim_{c\\to \\infty}\\left[\\mathrm{arctan}\\ x\\right]_{0}^{c} = \\lim_{c\\to \\infty}\\mathrm{arctan}\\ c =\\frac{π}{2}\\]"
        },
        {
            question: "\\[\\int_{0}^{1} \\ln x\\ dx\\]",
            choices: ["-1", "-2", "発散", "-e^{- 1}", "-e", "- \\infty"],
            correctIndex: 0,
            explanation: "部分積分法で計算すると，\\(\\int \\ln x\\ dx = x\\ln x -x. \\)\\[\\int_{0}^{1} \\ln x\\ dx = \\lim_{c \\to +0}\\int_{c}^{1} \\ln x\\ dx = \\lim_{c \\to +0} \\left[x\\ln x - x\\right]_{c}^1 \\]\\[ = (-1) - \\lim_{c\\to +0} (x\\ln x - x) = -1\\]"
        },
        {
            question: "\\[\\int_{0}^{1} \\frac{1}{x^{\\frac{2}{3}}} dx\\]",
            choices: [3, 6, 4, "発散", "2", "\\frac{3}{2}"],
            correctIndex: 0,
            explanation: "\\(x=0\\) で被積分関数が発散します。\\[\\int_{0}^{1} x^{-\\frac{2}{3}} dx = \\lim_{\\varepsilon\\rightarrow +0}\\int_{\\varepsilon}^{1} x^{-\\frac{2}{3}} dx = \\lim_{\\varepsilon\\rightarrow +0}\\left[3x^{\\frac{1}{3}}\\right]_{\\varepsilon}^1 = 3\\]"
        },
        {
            question: "\\[\\int_{0}^{\\frac{\\pi}{2}} \\tan x\\ dx\\]",
            choices: ["\\infty", "0", "1", "\\frac{\\pi}{2}", "\\pi", "- \\infty"],
            correctIndex: 0,
            explanation: "\\(\\int \\tan x\\ dx = \\ln |\\cos x| +C\\) より，\\[\\int_{0}^{\\frac{\\pi}{2}} \\tan x\\ dx = \\lim_{c \\to \\frac{\\pi}{2}-0} \\int_{0}^{c} \\tan x\\ dx\\]\\[ = \\lim_{c \\to \\frac{\\pi}{2}-0} [-\\ln|\\cos x|\\ ]_{0}^{c} = \\infty\\]"
        },
        {
            question: "\\[\\int_{1}^{\\infty} e^{- x}\\ dx\\]",
            choices: ["e^{- 1}", "e", "1", "2", "\\frac{1}{2}", "\\frac{3}{2}"],
            correctIndex: 0,
            explanation: "\\[\\int_{1}^{\\infty} e^{- x}\\ dx = \\lim_{c\\to \\infty}\\int_{1}^{c} e^{- x}\\ dx = \\lim_{c\\to \\infty}[-e^{- x}]_{1}^{c}\\]\\[  = \\lim_{c\\to \\infty}(-e^{-c}) + e^{- 1} = e^{- 1}\\]"
        },
        {
            question: "\\[\\int_{0}^{\\infty} \\sin x dx\\]",
            choices: ["発散", 0, 1, "\\pi", "-1", "\\frac{\\sqrt{2}}{2}"],
            correctIndex: 0,
            explanation: "\\[\\lim_{c \\to \\infty} \\int_{0}^{c} \\sin x dx = \\lim_{c \\to \\infty} [-\\cos x]_0^c = \\lim_{c \\to \\infty} (1 - \\cos c)\\] \\(1-\\cos c\\)\\ は振動するので発散する。"
        }
    ],
    intermediate: [
        {
            question: "\\[\\int_{-\\infty}^{\\infty} \\frac{1}{x^2 + 1} dx\\]",
            choices: ["\\pi", "2 \\pi", "\\frac{\\pi}{2}", "1", "\\infty", "- \\infty"],
            correctIndex: 0,
            explanation: "標準的な積分結果\\[\\int_{-\\infty}^{\\infty} \\frac{1}{x^2 + 1} dx = \\left[\\tan^{-1}x\\right]_{-\\infty}^{\\infty} = \\frac{π}{2} - (-\\frac{π}{2}) = π\\]"
        },
        {
            question: "\\[\\int_{0}^{\\infty} e^{-x} dx\\]",
            choices: [1, 0, "発散", "∞", "e", "-1"],
            correctIndex: 0,
            explanation: "\\[\\lim_{b \\to \\infty} \\int_{0}^{b} e^{-x} dx = \\lim_{b \\to \\infty} \\left[-e^{-x}\\right]_0^b = \\lim_{b \\to \\infty} (-e^{-b} + 1) = 1\\]"
        },
        {
            question: "\\[\\int_{1}^{\\infty} \\frac{1}{x \\ln x} dx\\]",
            choices: ["発散", 1, 0, "∞", "e", "1/e"],
            correctIndex: 0,
            explanation: "\\[\\lim_{b \\to \\infty} \\int_{1}^{b} \\frac{1}{x \\ln x} dx = \\lim_{b \\to \\infty} [\\ln(\\ln x)]_1^b = \\infty\\]"
        },
        {
            question: "\\[\\int_{0}^{\\infty} \\frac{x}{e^x} dx\\]",
            choices: [1, "発散", 0, "∞", "Γ(2)", "2"],
            correctIndex: 0,
            explanation: "ガンマ関数\\[\\int_{0}^{\\infty} x e^{-x} dx = Γ(2) = 1! = 1\\]"
        },
        {
            question: "\\[\\int_{-1}^{2} \\frac{1}{x^{1/3}} dx\\]",
            choices: ["9/2", "発散", 3, 0, "6", "∞"],
            correctIndex: 0,
            explanation: "\\[\\int_{-1}^{0} (-x)^{-1/3} dx + \\int_{0}^{2} x^{-1/3} dx = 3[(-x)^{2/3}]_{-1}^0 + 3[x^{2/3}]_0^2 = 3(0-1) + 3(2^{2/3}-0) = -3 + 3\\sqrt[3]{4}\\]"
        },
        {
            question: "\\[\\int_{0}^{\\pi} \\frac{1}{\\sqrt{\\sin x}} dx\\]",
            choices: ["発散", "2√π", "Γ(1/4)", "√2", "π", "0"],
            correctIndex: 0,
            explanation: "x=0,π 近傍で被積分関数が発散\\[\\lim_{ε\\to0^+} \\int_{0}^{ε} x^{-1/2} dx = \\lim_{ε\\to0} 2\\sqrt{ε} = 0\\] だが x=π/2 周辺でも積分可能性を検討"
        },
        {
            question: "\\[\\int_{0}^{1} \\frac{1}{x^p} dx\\ \\ \\ (p=0.5)\\]",
            choices: [2, "発散", 1, "1/(1-p)", "∞", "0"],
            correctIndex: 0,
            explanation: "p<1で収束\\[\\int_{0}^{1} x^{-0.5} dx = [2\\sqrt{x}]_0^1 = 2\\]"
        },
        {
            question: "\\[\\int_{0}^{\\infty} \\frac{\\sin x}{x} dx\\]",
            choices: ["π/2", "発散", 0, 1, "∞", "-π/2"],
            correctIndex: 0,
            explanation: "ディリクレ積分\\[\\int_{0}^{\\infty} \\frac{\\sin x}{x} dx = \\frac{π}{2}\\]"
        },
        {
            question: "\\[\\int_{0}^{1} \\frac{1}{(1-x)^2} dx\\]",
            choices: ["発散", 1, 0, "∞", "1/(1-x)", "-1"],
            correctIndex: 0,
            explanation: "x→1で発散\\[\\lim_{ε\\to0^+} \\int_{0}^{1-ε} \\frac{1}{(1-x)^2} dx = \\lim_{ε\\to0} \\left[\\frac{1}{1-x}\\right]_0^{1-ε} = \\infty\\]"
        }
    ],
    advanced: [
        {
            question: "\\[\\int_{0}^{\\infty} \\frac{\\ln x}{1+x^2} dx\\]",
            choices: [0, "π/2", "発散", "-π^2/4", "∞", "1"],
            correctIndex: 0,
            explanation: "対称性を利用\\[x = 1/t と置換すると I = -I \\Rightarrow I=0\\]"
        },
        {
            question: "\\[\\int_{0}^{\\infty} e^{-x} \\ln x dx\\]",
            choices: ["-γ", "0", "発散", "Γ'(1)", "1", "∞"],
            correctIndex: 0,
            explanation: "オイラー・マスケローニ定数γを用いて\\[\\int_{0}^{\\infty} e^{-x} \\ln x dx = -γ\\]"
        },
        {
            question: "\\[\\int_{0}^{1} \\frac{\\ln(1+x)}{x} dx\\]",
            choices: ["π^2/12", "1", "0", "発散", "ζ(2)", "∞"],
            correctIndex: 0,
            explanation: "テイラー展開利用\\[\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n^2} = \\frac{π^2}{12}\\]"
        },
        {
            question: "\\[\\int_{0}^{\\pi/2} \\ln(\\sin x) dx\\]",
            choices: ["-π ln2", "0", "発散", "π/2", "∞", "-1"],
            correctIndex: 0,
            explanation: "対称性を利用\\[I = \\frac{π}{2} \\ln\\left(\\frac{1}{2}\\right) = -\\frac{π}{2}\\ln2\\]"
        },
        {
            question: "\\[\\int_{0}^{\\infty} \\frac{x^{s-1}}{e^x - 1} dx\\ \\ \\  (s=3)\\]",
            choices: ["2ζ(3)", "発散", "Γ(3)", "ζ(2)", "∞", "0"],
            correctIndex: 0,
            explanation: "リーマンゼータ関数\\[\\int_{0}^{\\infty} \\frac{x^{2}}{e^x - 1} dx = 2ζ(3)\\]"
        },
        {
            question: "\\[\\int_{0}^{1} \\int_{0}^{1} \\frac{1}{1 - xy} dx dy\\]",
            choices: ["π^2/6", "発散", "1", "∞", "ζ(2)", "0"],
            correctIndex: 0,
            explanation: "Basel問題との関連\\[\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{π^2}{6}\\]"
        },
        {
            question: "\\[\\int_{0}^{\\infty} \\cos(x^2) dx\\]",
            choices: ["\\sqrt{\\pi/8}", "0", "発散", "1", "∞", "Γ(1/2)"],
            correctIndex: 0,
            explanation: "フレネル積分\\[\\int_{0}^{\\infty} \\cos(x^2) dx = \\frac{1}{2}\\sqrt{\\frac{π}{2}}\\]"
        },
        {
            question: "\\[\\int_{-\\infty}^{\\infty} e^{-x^2} H_2(x) dx\\ \\ \\ \\  (H_n(x):\\textrm{エルミート多項式})\\]",
            choices: ["0", "√π", "2^n n! √π", "発散", "∞", "-√π"],
            correctIndex: 0,
            explanation: "エルミート多項式の直交性\\[n≠0\\ のとき積分は\\ 0\\]"
        }
    ]
};

// 問題生成関数
function generateQuestion(difficulty) {
    const levelProblems = problems[difficulty];
    const selected = levelProblems[Math.floor(Math.random() * levelProblems.length)];
    const choices = selected.choices.map((value, index) => ({
        value,
        isCorrect: index === selected.correctIndex
    }));
    
    // 正解インデックスを追跡
    // Fisher-Yatesシャッフルアルゴリズムで正しくシャッフル
    const shuffledChoices = [...choices];
    for (let i = shuffledChoices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
    }
    const newCorrectIndex = shuffledChoices.findIndex(c => c.isCorrect);
    
    currentQuestion = {  // グローバル変数に保存
        question: selected.question,
        choices: shuffledChoices,
        explanation: selected.explanation,
        correctIndex: newCorrectIndex
    };
    return currentQuestion;
}

// 問題表示関数
function showQuestion(questionObj) {
    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices');
    
    questionText.innerHTML = questionObj.question;
    MathJax.typesetPromise([questionText]);
    choicesContainer.innerHTML = '';
    
    questionObj.choices.forEach((choiceObj, index) => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-primary choice-btn';
        button.innerHTML = `\\(${choiceObj.value}\\)`;  // MathJax表示用
        button.setAttribute('data-correct', index === currentQuestion.correctIndex);
        button.onclick = (e) => {
            const clickedButton = e.currentTarget;
            checkAnswer(clickedButton);
        };
        choicesContainer.appendChild(button);
        MathJax.typeset([button]);  // 個別にレンダリング
    });
}

// 解答チェック関数
let currentQuestion = null;  // 現在の問題を追跡

function checkAnswer(selectedButton) {
    const buttons = document.querySelectorAll('.choice-btn');
    const explanation = document.getElementById('explanation');
    const explanationText = document.getElementById('explanation-text');
    const resultText = document.getElementById('result-text');
    
    buttons.forEach((button, index) => {
        button.disabled = true;
        const isCorrect = button.getAttribute('data-correct') === 'true';
        button.setAttribute('data-correct', isCorrect);
        
        if(isCorrect) {
            button.classList.add('correct');
        }
        if(button === selectedButton) {
            button.classList.add('selected');
            resultText.textContent = isCorrect ? '正解です!' : '不正解です';
            resultText.style.color = isCorrect ? 'green' : 'red';
        }
    });
    
    explanationText.innerHTML = currentQuestion.explanation;
    explanation.style.display = 'block';
    MathJax.typesetPromise([explanationText]).catch((err) => {
        console.error('MathJax typeset error:', err);
        setTimeout(() => MathJax.typesetPromise([explanationText]), 500);
    });
}

// 難易度選択処理
function selectDifficulty(difficulty) {
    document.currentDifficulty = difficulty;
    const question = generateQuestion(difficulty);
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('result-text').textContent = '';
    showQuestion(question);
}

// 初期化処理
window.onload = () => {
    selectDifficulty('beginner'); // デフォルトで初級問題を表示
};