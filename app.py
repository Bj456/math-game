# Hindi Math Game for Kids - Streamlit App
import streamlit as st

st.set_page_config(page_title="हिंदी Math गेम", layout="centered")
st.title("🎉 हिंदी में बच्चों के लिए Math गेम 🎉")

# Math Questions
questions = [
    {"question": "5 + 3 = ?", "answer": 8},
    {"question": "7 - 2 = ?", "answer": 5},
    {"question": "4 × 3 = ?", "answer": 12},
    {"question": "9 ÷ 3 = ?", "answer": 3},
    {"question": "6 + 7 = ?", "answer": 13}
]

score = 0

st.write("नीचे दिए गए सवालों के उत्तर दें:")

# Input Fields for Questions
user_answers = []
for i, q in enumerate(questions):
    ans = st.text_input(f"{q['question']}", key=i)
    user_answers.append(ans)

# Check Answers Button
if st.button("उत्तर जांचें"):
    score = 0
    for i, q in enumerate(questions):
        try:
            if int(user_answers[i]) == q['answer']:
                st.success(f"सवाल {i+1}: सही ✅")
                score += 1
            else:
                st.error(f"सवाल {i+1}: गलत ❌. सही उत्तर: {q['answer']}")
        except:
            st.warning(f"सवाल {i+1}: उत्तर दर्ज करें!")
    st.balloons()
    st.write(f"आपका स्कोर: {score}/{len(questions)}")
