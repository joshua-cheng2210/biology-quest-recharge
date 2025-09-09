export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export const quizData: Quiz[] = [
  {
    id: "intro-biology",
    title: "Introduction to Biology",
    questions: [
      {
        id: "bio-1",
        question: "What is the basic unit of life?",
        options: ["Atom", "Cell", "Tissue", "Organ"],
        correctAnswer: 1,
        explanation: "The cell is the fundamental unit of life, as all living organisms are composed of one or more cells."
      },
      {
        id: "bio-2", 
        question: "Which process do plants use to make their own food?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
        correctAnswer: 1,
        explanation: "Photosynthesis is the process by which plants use sunlight, carbon dioxide, and water to produce glucose and oxygen."
      },
      {
        id: "bio-3",
        question: "What molecule carries genetic information in most organisms?",
        options: ["RNA", "DNA", "Protein", "Lipid"],
        correctAnswer: 1,
        explanation: "DNA (Deoxyribonucleic acid) is the molecule that stores genetic information in most living organisms."
      }
    ]
  },
  {
    id: "cell-biology",
    title: "Cell Biology",
    questions: [
      {
        id: "cell-1",
        question: "Which organelle is known as the 'powerhouse of the cell'?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
        correctAnswer: 2,
        explanation: "Mitochondria produce ATP through cellular respiration, providing energy for cellular processes."
      },
      {
        id: "cell-2",
        question: "What structure controls what enters and exits the cell?",
        options: ["Cell wall", "Cell membrane", "Cytoplasm", "Nucleus"],
        correctAnswer: 1,
        explanation: "The cell membrane is selectively permeable and regulates the movement of substances in and out of the cell."
      },
      {
        id: "cell-3",
        question: "Where is genetic material stored in eukaryotic cells?",
        options: ["Cytoplasm", "Nucleus", "Ribosome", "Mitochondria"],
        correctAnswer: 1,
        explanation: "In eukaryotic cells, DNA is contained within the nucleus, which is surrounded by a nuclear membrane."
      }
    ]
  },
  {
    id: "genetics",
    title: "Genetics & Heredity",
    questions: [
      {
        id: "gen-1",
        question: "What are the alternative forms of a gene called?",
        options: ["Chromosomes", "Alleles", "Phenotypes", "Genotypes"],
        correctAnswer: 1,
        explanation: "Alleles are different versions of the same gene that can produce different traits."
      },
      {
        id: "gen-2",
        question: "If an organism has two identical alleles for a trait, it is:",
        options: ["Heterozygous", "Homozygous", "Diploid", "Haploid"],
        correctAnswer: 1,
        explanation: "Homozygous means having two identical alleles for a particular gene."
      },
      {
        id: "gen-3",
        question: "What is the physical expression of genes called?",
        options: ["Genotype", "Phenotype", "Karyotype", "Prototype"],
        correctAnswer: 1,
        explanation: "Phenotype refers to the observable characteristics or traits of an organism."
      }
    ]
  },
  {
    id: "ecology",
    title: "Ecology & Environment",
    questions: [
      {
        id: "eco-1",
        question: "What is a group of organisms of the same species living in the same area called?",
        options: ["Community", "Population", "Ecosystem", "Biosphere"],
        correctAnswer: 1,
        explanation: "A population consists of individuals of the same species that live in the same geographic area."
      },
      {
        id: "eco-2",
        question: "Which organisms are at the base of most food chains?",
        options: ["Primary consumers", "Secondary consumers", "Producers", "Decomposers"],
        correctAnswer: 2,
        explanation: "Producers (like plants) convert sunlight into energy and form the base of food chains."
      },
      {
        id: "eco-3",
        question: "What is the role of decomposers in an ecosystem?",
        options: ["Produce energy", "Break down dead material", "Hunt prey", "Pollinate flowers"],
        correctAnswer: 1,
        explanation: "Decomposers break down dead organisms and waste, recycling nutrients back into the ecosystem."
      }
    ]
  },
  {
    id: "evolution",
    title: "Evolution & Natural Selection",
    questions: [
      {
        id: "evo-1",
        question: "Who proposed the theory of evolution by natural selection?",
        options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "James Watson"],
        correctAnswer: 1,
        explanation: "Charles Darwin developed the theory of evolution by natural selection in his work 'On the Origin of Species'."
      },
      {
        id: "evo-2",
        question: "What is natural selection?",
        options: ["Random mutations", "Survival of the fittest", "Genetic drift", "Gene flow"],
        correctAnswer: 1,
        explanation: "Natural selection is the process where organisms with favorable traits are more likely to survive and reproduce."
      },
      {
        id: "evo-3",
        question: "What provides evidence for evolution?",
        options: ["Fossil record", "Comparative anatomy", "Molecular biology", "All of the above"],
        correctAnswer: 3,
        explanation: "Multiple lines of evidence support evolution, including fossils, anatomical similarities, and genetic comparisons."
      }
    ]
  }
];