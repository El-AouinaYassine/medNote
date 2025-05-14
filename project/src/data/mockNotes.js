export const mockNotes = [
  // {
  //   id: 'n1',
  //   patientId: 'p1',
  //   patientName: 'Mohammed Amine',
  //   title: 'Consultation de suivi',
  //   color: 'bleu',
  //   content: "Le patient s'est présenté pour un suivi concernant son diabète. Les niveaux de glycémie se sont améliorés depuis la dernière visite. Le patient rapporte prendre de la metformine régulièrement. Une légère douleur au pied signalée, à surveiller. Encouragé à maintenir le régime alimentaire et l'exercice. Vérification de l'HbA1c à la prochaine visite.",
  //   createdAt: '2023-05-12T10:30:00Z',
  //   structuredData: {
  //     patient: {
  //       id: 'p1',
  //       name: 'Mohammed Amine',
  //       age: 45,
  //       gender: 'Homme',
  //       contact: '(+212) 612-345678'
  //     },
  //     diagnosis: ['Diabète de type 2', 'Hypertension'],
  //     symptoms: ['Légère douleur au pied'],
  //     medications: ['Metformine 500 mg BID', 'Lisinopril 10 mg quotidien'],
  //     plan: 'Suivi dans 3 mois, test HbA1c, continuer les médicaments actuels'
  //   }
  // },
  // {
  //   id: 'n2',
  //   patientId: 'p2',
  //   patientName: 'Fatima Zahra',
  //   title: 'Exacerbation de l’asthme',
  //   color: 'rouge',
  //   content: "La patiente s'est présentée avec une exacerbation aiguë de l'asthme. Rapporte une toux aggravée et un essoufflement depuis 3 jours, déclenchés par une récente exposition au pollen. Nébuliseur d'albutérol administré au cabinet avec une bonne réponse. Prednisone orale prescrite en dégressif et conseillé de continuer l'inhalateur régulier. Éducation sur l'évitement des déclencheurs fournie.",
  //   createdAt: '2023-05-02T14:15:00Z',
  //   structuredData: {
  //     patient: {
  //       id: 'p2',
  //       name: 'Fatima Zahra',
  //       age: 32,
  //       gender: 'Femme',
  //       contact: '(+212) 698-765432'
  //     },
  //     diagnosis: ['Exacerbation aiguë de l’asthme', 'Rhinite allergique'],
  //     symptoms: ['Toux', 'Essoufflement', 'Sibilance'],
  //     medications: ['Albutérol HFA', 'Fluticasone/Salmétérol', 'Prednisone dégressif'],
  //     plan: 'Suivi dans 1 semaine, continuer les médicaments de contrôle, compléter le traitement stéroïdien'
  //   }
  // },
  // {
  //   id: 'n3',
  //   patientId: 'p3',
  //   patientName: 'Hassan El Idrissi',
  //   title: 'Consultation en cardiologie',
  //   color: 'violet',
  //   content: "Le patient a été référé pour une évaluation cardiaque. Rapporte des douleurs thoraciques occasionnelles à l'effort. ECG montre un rythme sinusal normal sans changements aigus. Test d'effort programmé pour la semaine prochaine. Continuer les médicaments cardiaques actuels. Discuté de l'importance de l'observance médicamenteuse et du suivi régulier de la tension artérielle à domicile.",
  //   createdAt: '2023-03-28T11:00:00Z',
  //   structuredData: {
  //     patient: {
  //       id: 'p3',
  //       name: 'Hassan El Idrissi',
  //       age: 67,
  //       gender: 'Homme',
  //       contact: '(+212) 645-678901'
  //     },
  //     diagnosis: ['Maladie coronarienne', 'Angine stable', 'Hypertension'],
  //     symptoms: ['Douleur thoracique à l’effort', 'Vertiges occasionnels'],
  //     medications: ['Aspirine 81 mg quotidien', 'Atorvastatine 40 mg quotidien', 'Métoprolol 25 mg BID', 'Nitroglycérine SL PRN'],
  //     plan: 'Test d’effort programmé, suivi après les résultats, continuer les médicaments actuels'
  //   }
  // },
  // {
  //   id: 'n4',
  //   patientId: 'p4',
  //   patientName: 'Amina Benjelloun',
  //   title: 'Examen annuel',
  //   color: 'vert',
  //   content: "Examen annuel de routine. La patiente rapporte une santé globale bonne avec des symptômes d'anxiété occasionnels bien contrôlés par le médicament actuel. Tous les signes vitaux dans les limites normales. Mesures de santé préventive discutées, y compris l'alimentation, l'exercice et l'hygiène du sommeil. Analyses de routine demandées.",
  //   createdAt: '2023-04-22T09:45:00Z',
  //   structuredData: {
  //     patient: {
  //       id: 'p4',
  //       name: 'Amina Benjelloun',
  //       age: 29,
  //       gender: 'Femme',
  //       contact: '(+212) 678-901234'
  //     },
  //     diagnosis: ['Trouble anxieux généralisé'],
  //     symptoms: ['Anxiété occasionnelle'],
  //     medications: ['Sertraline 50 mg quotidien'],
  //     plan: 'Continuer le médicament actuel, analyses de routine, suivi dans 1 an'
  //   }
  // },
  // {
  //   id: 'n5',
  //   patientId: 'p1',
  //   patientName: 'Mohammed Amine',
  //   title: 'Visite urgente - Fièvre',
  //   color: 'orange',
  //   content: "Le patient s'est présenté avec un historique de 3 jours de fièvre, toux et fatigue. Température de 38,4°C au cabinet. Poumons clairs à l'auscultation. Test COVID rapide négatif. Diagnostiqué avec une infection respiratoire supérieure, probablement virale. Repos, hydratation et paracétamol pour la fièvre recommandés. Revenir si les symptômes s'aggravent ou persistent au-delà de 7 jours.",
  //   createdAt: '2023-04-05T16:00:00Z',
  //   structuredData: {
  //     patient: {
  //       id: 'p1',
  //       name: 'Mohammed Amine',
  //       age: 45,
  //       gender: 'Homme',
  //       contact: '(+212) 612-345678'
  //     },
  //     diagnosis: ['Infection respiratoire supérieure', 'Bronchite aiguë'],
  //     symptoms: ['Fièvre', 'Toux', 'Fatigue'],
  //     medications: ['Paracétamol 500 mg q6h PRN', 'Dextrométhorphane PRN'],
  //     plan: 'Soins de soutien, revenir si les symptômes s’aggravent, continuer les médicaments pour le diabète'
  //   }
  // },
  // {
  //   id: 'n6',
  //   patientId: 'p5',
  //   patientName: 'Youssef Laarbi',
  //   title: 'Suivi de migraine',
  //   color: 'jaune',
  //   content: "Le patient rapporte une réduction de la fréquence des migraines depuis le début du traitement préventif. Maintenant environ 1 migraine par mois contre 3-4 auparavant. Le médicament de secours est efficace lorsque nécessaire. Stress et mauvais sommeil identifiés comme déclencheurs restants. Techniques d'hygiène du sommeil et stratégies de gestion du stress discutées.",
  //   createdAt: '2023-05-10T15:30:00Z',
  //   structuredData: {
  //     patient: {
  //       id: 'p5',
  //       name: 'Youssef Laarbi',
  //       age: 52,
  //       gender: 'Homme',
  //       contact: '(+212) 623-456789'
  //     },
  //     diagnosis: ['Migraine avec aura', 'RGO'],
  //     symptoms: ['Maux de tête', 'Troubles visuels', 'Photophobie'],
  //     medications: ['Propranolol 60 mg quotidien', 'Sumatriptan 50 mg PRN', 'Oméprazole 20 mg quotidien'],
  //     plan: 'Continuer les médicaments actuels, techniques de gestion du stress, suivi dans 3 mois'
  //   }
  // }
];