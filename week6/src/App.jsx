import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  // --- STATE MANAGEMENT ---
  const [screen, setScreen] = useState('welcome'); // welcome, input-material, input-json, quiz, result, review
  const [textMaterial, setTextMaterial] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // Menyimpan jawaban pengguna { questionIndex: selectedOption }
  const [score, setScore] = useState({ correct: 0, incorrect: 0, percentage: 0, badge: '' });

  // --- PEMBUATAN SOAL OTOMATIS (TEXT PARSER) ---
  const generateQuizFromText = () => {
    if (!textMaterial.trim()) {
      alert('Silakan masukkan materi terlebih dahulu!');
      return;
    }

    // Memisahkan teks berdasarkan tanda titik untuk mengambil kalimat
    const sentences = textMaterial
      .split(/[.!?]/)
      .map(s => s.trim())
      .filter(s => s.length > 20); // Mengambil kalimat yang cukup panjang

    if (sentences.length === 0) {
      alert('Materi terlalu pendek atau kurang lengkap. Tuliskan beberapa kalimat ya!');
      return;
    }

    const generatedQuestions = sentences.map((sentence, index) => {
      const words = sentence.split(' ');
      // Mengambil kata di tengah-tengah sebagai kata kunci yang ditiadakan (jawaban benar)
      const targetWordIndex = Math.floor(words.length / 2);
      const correctAnswer = words[targetWordIndex].replace(/[,()"]/g, '');
      
      // Membuat kalimat tanya dengan menyembunyikan kata kunci
      words[targetWordIndex] = '_______';
      const questionText = `Apa kata yang tepat untuk melengkapi kalimat berikut: "${words.join(' ')}"?`;

      // Membuat pilihan jawaban pengecoh (distraktor) secara acak dari kata lain di kalimat tersebut
      const distractors = words
        .filter((w, i) => i !== targetWordIndex && w.length > 3 && w !== '_______')
        .map(w => w.replace(/[,()"]/g, ''));
      
      // Ambil keunikan distraktor dan batasi maksimal 3 kata acak
      const uniqueDistractors = [...new Set(distractors)].slice(0, 3);
      
      // Jika kekurangan distraktor, berikan pilihan default lucu
      while (uniqueDistractors.length < 3) {
        uniqueDistractors.push(['Opsi A', 'Opsi B', 'Opsi C'][uniqueDistractors.length]);
      }

      // Gabungkan jawaban benar dan distraktor, lalu acak urutannya
      const options = [correctAnswer, ...uniqueDistractors].sort(() => Math.random() - 0.5);

      return {
        id: index + 1,
        question: questionText,
        options: options,
        answer: correctAnswer
      };
    });

    setQuestions(generatedQuestions);
    startQuizSetup(generatedQuestions);
  };

  // --- PROSES PARSING JSON ---
  const handleJsonSubmit = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        throw new Error('Format harus berupa Array dari objek soal.');
      }
      // Validasi struktur minimal objek soal
      if (!parsed[0].question || !parsed[0].options || !parsed[0].answer) {
        throw new Error('Setiap soal harus punya properti: question, options, dan answer.');
      }
      setQuestions(parsed);
      startQuizSetup(parsed);
    } catch (error) {
      alert('Format JSON salah! Pastikan formatnya sesuai contoh.\nError: ' + error.message);
    }
  };

  // --- INISIALISASI KUIS ---
  const startQuizSetup = (loadedQuestions) => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScreen('quiz');
  };

  // --- EVENT HANDLING UTK NAVIGASI KUIS ---
  const handleSelectOption = (option) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: option
    });
  };

  const handleNext = () => {
    if (!userAnswers[currentQuestionIndex]) {
      alert('Pilih salah satu jawaban dulu yuk! ✨');
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // --- KALKULASI HASIL AKHIR ---
  const handleFinish = () => {
    if (!userAnswers[currentQuestionIndex]) {
      alert('Pilih salah satu jawaban dulu yuk! ✨');
      return;
    }

    let correctCount = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        correctCount++;
      }
    });

    const incorrectCount = questions.length - correctCount;
    const finalPercentage = Math.round((correctCount / questions.length) * 100);
    
    // Menentukan Badge
    let finalBadge = '💪 Keep Learning';
    if (finalPercentage >= 85) {
      finalBadge = '🏆 Excellent';
    } else if (finalPercentage >= 60) {
      finalBadge = '🌟 Good Job';
    }

    setScore({
      correct: correctCount,
      incorrect: incorrectCount,
      percentage: finalPercentage,
      badge: finalBadge
    });

    setScreen('result');
  };

  // --- TEMPLATE JSON CONTOH ---
  const insertSampleJson = () => {
    const sample = [
      {
        "question": "Apa kepanjangan dari singkatan HTML?",
        "options": ["Hyper Text Markup Language", "Hyper Tech Media Language", "Home Tool Markup Language", "Hyperlink Text Multi Language"],
        "answer": "Hyper Text Markup Language"
      },
      {
        "question": "Di dalam React, hook apa yang digunakan untuk mengelola state lokal?",
        "options": ["useEffect", "useState", "useContext", "useReducer"],
        "answer": "useState"
      },
      {
        "question": "Warna manakah yang termasuk kategori warna pastel?",
        "options": ["Hitam Pekat", "Merah Menyala", "Pink Soft / Merah Muda Lembut", "Neon Hijau"],
        "answer": "Pink Soft / Merah Muda Lembut"
      }
    ];
    setJsonInput(JSON.stringify(sample, null, 2));
  };

  // --- PROGRESS BAR CALCULATION ---
  const progressPercent = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  return (
    <div className="app-container">
      {/* 1. HALAMAN WELCOME */}
      {screen === 'welcome' && (
        <div className="card fade-in text-center">
          <div className="icon-header">🦄</div>
          <h1>BrainyPastel Quiz</h1>
          <p className="subtitle">Uji pengetahuanmu dengan cara yang menyenangkan, interaktif, dan penuh warna imut!</p>
          <div className="welcome-buttons">
            <button className="btn btn-primary" onClick={() => setScreen('input-material')}>
              📝 Buat Kuis dari Materi Teks
            </button>
            <button className="btn className=btn btn-secondary" onClick={() => setScreen('input-json')}>
              💻 Import Kuis via JSON
            </button>
          </div>
        </div>
      )}

      {/* 2. HALAMAN INPUT MATERI */}
      {screen === 'input-material' && (
        <div className="card fade-in">
          <h2>Buat Kuis Otomatis dari Teks</h2>
          <p className="instruction">Tempelkan artikel atau rangkuman materimu di bawah ini. Sistem akan mencoba membuat soal pilihan ganda secara cerdas!</p>
          <textarea
            rows="8"
            placeholder="Contoh: React adalah pustaka JavaScript untuk membangun antarmuka pengguna. React dikembangkan oleh Facebook. State digunakan untuk menyimpan data komponen..."
            value={textMaterial}
            onChange={(e) => setTextMaterial(e.target.value)}
          ></textarea>
          <div className="action-buttons">
            <button className="btn btn-outline" onClick={() => setScreen('welcome')}>Kembali</button>
            <button className="btn btn-primary" onClick={generateQuizFromText}>Generate Kuis ✨</button>
          </div>
        </div>
      )}

      {/* 3. HALAMAN INPUT JSON */}
      {screen === 'input-json' && (
        <div className="card fade-in">
          <h2>Import Kuis via Format JSON</h2>
          <p className="instruction">Masukkan kode JSON soal buatanmu sendiri atau klik tombol contoh untuk melihat format yang benar.</p>
          <div className="text-right">
            <button className="btn-sm" onClick={insertSampleJson}>👉 Gunakan Contoh JSON</button>
          </div>
          <textarea
            rows="10"
            className="code-area"
            placeholder='[{"question": "Soal?", "options": ["A", "B", "C", "D"], "answer": "A"}]'
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          ></textarea>
          <div className="action-buttons">
            <button className="btn btn-outline" onClick={() => setScreen('welcome')}>Kembali</button>
            <button className="btn btn-primary" onClick={handleJsonSubmit}>Mulai Kuis 🚀</button>
          </div>
        </div>
      )}

      {/* 4. HALAMAN UTAMA KUIS (QUIZ SCREEN) */}
      {screen === 'quiz' && questions.length > 0 && (
        <div className="card fade-in">
          {/* Progress Section */}
          <div className="quiz-header">
            <span className="badge-info">Soal {currentQuestionIndex + 1} dari {questions.length}</span>
          </div>
          
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>

          {/* Question Text */}
          <h3 className="question-text">{questions[currentQuestionIndex].question}</h3>

          {/* Options List */}
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option, idx) => {
              const optionLetters = ['A', 'B', 'C', 'D'];
              const isSelected = userAnswers[currentQuestionIndex] === option;
              return (
                <button
                  key={idx}
                  className={`option-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectOption(option)}
                >
                  <span className="option-letter">{optionLetters[idx]}</span>
                  <span className="option-value">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="quiz-navigation">
            <button 
              className="btn btn-outline" 
              onClick={handlePrev} 
              disabled={currentQuestionIndex === 0}
            >
              ⬅️ Sebelumnya
            </button>
            
            {currentQuestionIndex < questions.length - 1 ? (
              <button 
                className="btn btn-primary" 
                onClick={handleNext}
                disabled={!userAnswers[currentQuestionIndex]}
              >
                Selanjutnya ➡️
              </button>
            ) : (
              <button 
                className="btn btn-finish" 
                onClick={handleFinish}
                disabled={!userAnswers[currentQuestionIndex]}
              >
                Selesai & Lihat Hasil 🎉
              </button>
            )}
          </div>
        </div>
      )}

      {/* 5. HALAMAN HASIL (RESULT SCREEN) */}
      {screen === 'result' && (
        <div className="card text-center fade-in">
          <div className="badge-display">{score.badge}</div>
          <h2>Hasil Kuis Kamu!</h2>
          
          <div className="score-circle">
            <div className="score-num">{score.percentage}%</div>
            <div className="score-label">Nilai Akhir</div>
          </div>

          <div className="stats-table">
            <div className="stats-row">
              <span>Benar ✅</span>
              <span className="text-success bold">{score.correct} Soal</span>
            </div>
            <div className="stats-row">
              <span>Salah ❌</span>
              <span className="text-danger bold">{score.incorrect} Soal</span>
            </div>
          </div>

          <div className="result-actions">
            <button className="btn btn-secondary" onClick={() => setScreen('review')}>🔎 Review Jawaban</button>
            <button className="btn btn-primary" onClick={() => startQuizSetup(questions)}>🔄 Ulangi Kuis</button>
            <button className="btn btn-outline-block" onClick={() => setScreen('welcome')}>🏠 Kembali ke Beranda</button>
          </div>
        </div>
      )}

      {/* 6. HALAMAN REVIEW JAWABAN */}
      {screen === 'review' && (
        <div className="card fade-in">
          <h2>Review Jawaban Anda</h2>
          <p className="instruction">Periksa kembali lembar jawaban untuk mengevaluasi materi yang sudah dikerjakan.</p>
          
          <div className="review-list">
            {questions.map((q, index) => {
              const isCorrect = userAnswers[index] === q.answer;
              return (
                <div key={index} className={`review-item ${isCorrect ? 'correct-border' : 'wrong-border'}`}>
                  <h4>No. {index + 1}: {q.question}</h4>
                  <div className="review-details">
                    <p>
                      <strong>Jawaban Kamu:</strong>{' '}
                      <span className={isCorrect ? 'text-success' : 'text-danger'}>
                        {userAnswers[index]} {isCorrect ? '✅' : '❌'}
                      </span>
                    </p>
                    {!isCorrect && (
                      <p>
                        <strong>Jawaban Benar:</strong> <span className="text-success bold">{q.answer}</span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="margin-top-md">
            <button className="btn btn-primary btn-block" onClick={() => setScreen('result')}>
              ⬅️ Kembali ke Hasil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}