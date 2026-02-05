# Team Number – Automatic Grammar Correction Using Deep Learning

## Team Info
- 22471A05XX — **Name** ([LinkedIn](https://linkedin.com/in/xxxxxxxxxx))  
  *Work Done:* Dataset collection, preprocessing, and exploratory data analysis

- 22471A05XX — **Name** ([LinkedIn](https://linkedin.com/in/xxxxxxxxxx))  
  *Work Done:* Model architecture design and training

- 22471A05XX — **Name** ([LinkedIn](https://linkedin.com/in/xxxxxxxxxx))  
  *Work Done:* Model testing, evaluation, and error analysis

- 22471A05XX — **Name** ([LinkedIn](https://linkedin.com/in/xxxxxxxxxx))  
  *Work Done:* Documentation and deployment

---

## Abstract
Grammatical errors are common in text written by non-native English speakers and often affect clarity, fluency, and professionalism. This project presents an automatic grammar correction system using deep learning–based sequence-to-sequence models. The proposed system identifies and corrects grammatical errors such as tense inconsistencies, subject–verb agreement errors, missing articles, and incorrect word usage. The model generates fluent and grammatically correct sentences, making it suitable for academic, professional, and real-world writing applications.

---

## Paper Reference (Inspiration)
👉 **[Supervised Copy Mechanism for Grammatical Error Correction  
– J. Zhao et al.](Paper URL here)**  

Original IEEE/conference paper used as inspiration for the model architecture and correction strategy.

---

## Our Improvement Over Existing Paper
- Adopted a transformer-based encoder–decoder architecture
- Improved handling of unchanged tokens using an enhanced copy mechanism
- Applied advanced preprocessing to handle noisy learner-written text
- Achieved better fluency and grammatical accuracy on unseen sentences

---

## About the Project
This project automatically corrects grammatical errors in English sentences using deep learning techniques.

### Why It Is Useful
- Helps students and non-native speakers improve writing quality
- Useful for academic writing, emails, and competitive exams (IELTS, GRE, etc.)
- Reduces the need for manual proofreading

### Workflow
Input Sentence
↓
Text Preprocessing & Tokenization
↓
Grammar Correction Model
↓
Grammatically Correct Sentence


---

## Dataset Used
👉 **[JFLEG – JHU Fluency-Extended GUG Dataset](https://www.kaggle.com/datasets/jfleg/jfleg-dataset)**

### Dataset Details
- Learner-written English sentences with grammatical errors
- Multiple human-corrected reference sentences
- Focuses on fluency-oriented grammar correction
- Widely used benchmark dataset for GEC tasks

---

## Dependencies Used
- Python  
- PyTorch  
- Transformers  
- NumPy  
- Pandas  
- NLTK  
- Scikit-learn  
- Jupyter Notebook  

---

## EDA & Preprocessing
- Removed noisy and incomplete sentence pairs
- Tokenized text using subword-based tokenization
- Applied text normalization and lowercasing
- Created aligned source–target sentence pairs
- Analyzed sentence length and error distribution

---

## Model Training Info
- Model Type: Transformer / BART-based Seq2Seq model
- Loss Function: Cross-Entropy Loss
- Optimizer: AdamW
- Train–Validation Split: 80%–20%
- Early stopping used to prevent overfitting

---

## Model Testing / Evaluation
- Evaluation Metrics: BLEU, GLEU
- Sentence-level qualitative evaluation
- Comparison with human reference corrections
- Error-wise performance analysis

---

## Results
- Successfully corrected common grammatical errors
- Generated fluent and context-aware corrected sentences
- Outperformed baseline approaches
- Demonstrated good generalization on unseen data

---

## Limitations & Future Work
### Limitations
- Performance degrades on very long or complex sentences
- Limited capability in correcting deep semantic errors

### Future Work
- Integrate larger models such as T5 or GECToR
- Support real-time grammar correction
- Extend the system to multilingual grammar correction

---

## Deployment Info
- Deployed using Flask-based REST API
- Accepts raw text input and returns corrected output
- Can be integrated into web or mobile applications
