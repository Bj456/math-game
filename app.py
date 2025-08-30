import streamlit as st
import random

st.set_page_config(page_title="हिंदी Math गेम", layout="centered")
st.title("🎉 हिंदी में बच्चों के लिए Math गेम 🎉")

# Step 1: Select Operation
operation = st.selectbox("ऑपरेशन चुनें:", ["जोड़", "घटाव", "गुणा", "भाग"])

# Step 2: Number of Questions
num_questions = st.slider("कितने सवाल खेलना है?", 1, 10, 5)

score = 0
user_answers = []

st.write(f"आपने ऑपरेशन चुना है: {operation}")

questions = []

# Step 3: Generate Questions based on operation
for _ in range(num_questions):
    if operation == "जोड़":
        a = random.randint(1, 20)
        b = random.randint(1, 20)
        questions.append({"question": f"{a} + {b} = ?", "answer": a + b})
    elif operation == "घटाव":
        a = random.randint(1, 20)
        b = random.randint(1, a)  # ensure non-negative
        questions.append({"question": f"{a} - {b} = ?", "answer": a - b})
    elif operation == "गुणा":
        a = random.randint(1, 12)
        b = random.randint(1, 12)
        questions.append({"question": f"{a} × {b} = ?", "answer": a * b})
    elif operation == "भाग":
        b = random.randint(1, 12)
        a = b * random.randint(1, 12)  # divisible
        questions.append({"question": f"{a} ÷ {b} = ?", "answer": a // b})

st.write("नीचे सवालों के उत्तर दें:")

# Step 4: Display input fields
for i, q in enumerate(questions):
    ans = st.text_input(f"{q['question']}", key=i)
    user_answers.append(ans)

# Step 5: Check Answers Button
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
    st.write(f"आपका स्कोर: {score}/{num_questions}")
