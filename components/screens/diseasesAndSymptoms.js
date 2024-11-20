const diseasesAndSymptoms = {
  Flu: {
    symptoms: ["Fever", "Cough", "Sore throat", "Runny nose", "Body aches"],
    treatment: "Get plenty of rest, drink fluids, and take over-the-counter medications to relieve symptoms. If symptoms worsen, consult a doctor. Additionally, maintaining a healthy morning routine, staying hydrated, and managing stress can help with recovery."
  },
  Diarrhea: {
    symptoms: ["Frequent loose stools", "Abdominal cramps", "Bloating", "Urgency to go to the bathroom", "Nausea"],
    treatment: "Stay hydrated by drinking clear fluids like water, broth, or oral rehydration solutions. Avoid dairy, caffeine, and fatty foods. Seek medical attention if symptoms persist. Drinking water and maintaining a healthy diet can aid in faster recovery."
  },
  Cold: {
    symptoms: ["Sneezing", "Runny nose", "Sore throat"],
    treatment: "Rest, drink fluids, and take over-the-counter medications like decongestants or pain relievers. Consult a doctor if symptoms last more than 10 days. Stay hydrated, eat a balanced diet, and practice good sleep hygiene to support immune function."
  },
  "COVID-19": {
    symptoms: [
      "Fever",
      "Cough",
      "Fatigue",
      "Shortness of breath",
      "Loss of taste or smell",
    ],
    treatment: "Isolate yourself, rest, stay hydrated, and monitor symptoms. If symptoms worsen, seek medical attention immediately. Follow local health guidelines. Focus on rest, hydration, and eating healthy to support your body during recovery."
  },
  Malaria: {
    symptoms: ["Fever", "Chills", "Headache", "Sweating", "Nausea"],
    treatment: "Seek medical attention immediately. Malaria is treated with antimalarial medications prescribed by a healthcare professional. Stay hydrated and practice proper nutrition to help your body fight the infection."
  },
  Diabetes: {
    symptoms: ["Frequent urination", "Increased thirst", "Extreme fatigue", "Blurred vision"],
    treatment: "Maintain a healthy diet, exercise regularly, and monitor blood sugar levels. Consult a doctor for medication management if necessary. Stay hydrated and incorporate a balanced routine of exercise and healthy eating into your lifestyle."
  },
  Chickenpox: {
    symptoms: ["Rash", "Itching", "Fever", "Fatigue"],
    treatment: "Stay at home to avoid spreading the virus, use anti-itch creams, and take fever-reducing medications. Consult a doctor if the rash becomes severe. Ensure you are drinking plenty of water and maintaining good sleep hygiene during recovery."
  },
  Tuberculosis: {
    symptoms: [
      "Cough",
      "Blood in sputum",
      "Weight loss",
      "Night sweats",
      "Fatigue",
    ],
    treatment: "Seek medical attention immediately. Tuberculosis requires a specific antibiotic treatment regimen over several months. Maintain a consistent routine of eating healthy foods, staying hydrated, and getting sufficient sleep to aid in recovery."
  },
  Pneumonia: {
    symptoms: ["Cough", "Fever", "Shortness of breath", "Chest pain", "Fatigue"],
    treatment: "Rest, antibiotics (if bacterial), and fluids. Seek medical attention for severe symptoms, especially if breathing difficulty occurs. Support your recovery by drinking fluids, maintaining a healthy diet, and getting enough rest."
  },
  Asthma: {
    symptoms: ["Wheezing", "Cough", "Shortness of breath", "Chest tightness"],
    treatment: "Use prescribed inhalers for relief, avoid asthma triggers, and follow a healthcare provider’s action plan for asthma management. Maintaining a healthy lifestyle with regular exercise and proper hydration can help prevent symptoms."
  },
  Fever: {
    symptoms: ["High temperature", "Chills", "Sweating", "Headache", "Muscle aches", "Fatigue"],
    treatment: "Stay hydrated, rest, take fever-reducing medications like acetaminophen or ibuprofen, and consult a healthcare provider if the fever is persistent or very high. A balanced diet and sufficient rest will support your recovery process."
  },

  // Daily Routine Health Issues
  SleepDeprivation: {
    symptoms: ["Excessive tiredness", "Difficulty concentrating", "Irritability", "Mood swings", "Headaches"],
    treatment: "Ensure you get 7-9 hours of sleep, maintain a consistent sleep schedule, and avoid caffeine or screen time before bed. Consult a doctor if symptoms persist. Improve your sleep hygiene and manage stress to help you get better rest."
  },
  Dehydration: {
    symptoms: ["Dry mouth", "Fatigue", "Headache", "Dizziness", "Dark yellow urine"],
    treatment: "Increase fluid intake, particularly water, and avoid caffeine or alcohol. If severe symptoms occur, seek medical attention. Regular hydration throughout the day can prevent dehydration and improve overall health."
  },
  Stress: {
    symptoms: ["Anxiety", "Trouble sleeping", "Fatigue", "Irritability", "Muscle tension"],
    treatment: "Practice relaxation techniques like deep breathing, exercise regularly, and get enough sleep. Consider talking to a counselor if stress becomes overwhelming. Managing stress through a healthy routine of physical activity, sleep, and relaxation can reduce symptoms."
  },

};

export default diseasesAndSymptoms;
