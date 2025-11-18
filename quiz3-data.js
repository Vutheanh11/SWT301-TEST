// SWT Quiz 3 Data - Questions 121-180
const quizData = [
    {
        id: 121,
        question: "Which of the following statements are TRUE for Technical Review?\nI. Reviewers should be technical peers of the author, and technical experts in the same or other\nII. Review meeting is typically led by the author\nIII. Purposes gaining consensus, detecting potential defects\nIV. Scribe is mandatory\nV. Individual preparation before the review meeting is optional",
        options: {
            A: "I, II and III",
            B: "II, III and IV",
            C: "I, III and IV",
            D: "II and V"
        },
        correctAnswer: "C"
    },
    {
        id: 122,
        question: "When would exploratory testing be most beneficial during a testing cycle?",
        options: {
            A: "After receiving comprehensive training in the application.",
            B: "When detailed error logs from previous tests are available.",
            C: "When testing needs to be dynamic and adapt to new findings.",
            D: "Only in conjunction with user acceptance testing."
        },
        correctAnswer: "C"
    },
    {
        id: 123,
        question: "When utilizing error guessing as your testing strategy, what specific type of testing are you performing?",
        options: {
            A: "Specification-based",
            B: "Structure-based",
            C: "Experience-based",
            D: "Reference-based"
        },
        correctAnswer: "C"
    },
    {
        id: 124,
        question: "Which technique uses different combinations of inputs to result in different actions being taken?",
        options: {
            A: "Error guessing",
            B: "Decision table testing",
            C: "Boundary value analysis",
            D: "Equivalence partitioning"
        },
        correctAnswer: "B"
    },
    {
        id: 125,
        question: "Which the best thing about the regression test?",
        options: {
            A: "Regression test is only run once.",
            B: "Regression test will always be automated",
            C: "Regression test will check unchanged areas of the software to see if they have been affected",
            D: "Regression test will check changed areas of the software to see if they have been affected."
        },
        correctAnswer: "C"
    },
    {
        id: 126,
        question: "Considering the code provided, which is true about the minimal quantity of test cases necessary for complete statement and branch/decision coverage?\nRead A\nRead B\nIF A+B > 50 THEN\nPrint \"Sum two age\"\nENDIF\nIF B > 20 THEN\nPrint \"B is of adult age\"\nENDIF",
        options: {
            A: "1 test for statement coverage, 3 for branch coverage",
            B: "1 test for statement coverage, 1 for branch coverage",
            C: "1 test for statement coverage, 2 for branch coverage",
            D: "2 tests for statement coverage, 2 for branch coverage"
        },
        correctAnswer: "A"
    },
    {
        id: 127,
        question: "Boundary Value Analysis is an extension of which technique?",
        options: {
            A: "State Transition Testing",
            B: "Equivalence Partitioning",
            C: "Decision Table Testing",
            D: "Use Case Testing"
        },
        correctAnswer: "B"
    },
    {
        id: 128,
        question: "What is the key focus of state transition testing?",
        options: {
            A: "The changes in state within an application based on varying input conditions",
            B: "The visual aspects of the user interface",
            C: "The stability of application under peak load",
            D: "The compatibility of the software with various operating systems"
        },
        correctAnswer: "A"
    },
    {
        id: 129,
        question: "What essential skill does exploratory testing require from a tester?",
        options: {
            A: "Ability to strictly adhere to test scripts",
            B: "Specialization in performance and stress testing",
            C: "Proficiency in programming and automated tools",
            D: "Capacity to plan and execute tests simultaneously"
        },
        correctAnswer: "D"
    },
    {
        id: 130,
        question: "In error guessing, what is the tester primarily relying on to identify potential defects?",
        options: {
            A: "Formal specifications and requirements",
            B: "Randomly generated test cases",
            C: "Their own experience, intuition, and domain knowledge",
            D: "The feedback from automated testing tools"
        },
        correctAnswer: "C"
    },
    {
        id: 131,
        question: "Which of the following are common entry criteria for testing? (Choose 2 correct answers)",
        options: {
            A: "Availability of test environment",
            B: "Completion of all test cases",
            C: "Approval from the project manager",
            D: "Availability of necessary resources"
        },
        correctAnswer: "AD"
    },
    {
        id: 132,
        question: "Which statement best reflects the role of a test leader compared to a tester?",
        options: {
            A: "A test leader focuses on test execution while testers focus on test planning",
            B: "Test leaders and testers perform exactly the same roles within a project",
            C: "A test leader manages the testing process while testers focus on test execution",
            D: "Testers manage the project while test leaders provide technical support"
        },
        correctAnswer: "C"
    },
    {
        id: 133,
        question: "What is the final step in the incident management process?",
        options: {
            A: "Logging the incident",
            B: "Reviewing the incident with stakeholders",
            C: "Closing the incident report",
            D: "Assigning the incident to a developer"
        },
        correctAnswer: "C"
    },
    {
        id: 134,
        question: "What should the severity of a defect indicate?",
        options: {
            A: "The tester's skill level",
            B: "The impact of the defect on the system",
            C: "The cost of the software",
            D: "The timeline of the project"
        },
        correctAnswer: "B"
    },
    {
        id: 135,
        question: "Why are test strategies important in the planning phase?",
        options: {
            A: "They determine the programming languages used in development",
            B: "They provide a roadmap for design and architectural decisions",
            C: "They outline the approach, techniques, and priorities for the testing efforts",
            D: "They specify the user interface design and experience"
        },
        correctAnswer: "C"
    },
    {
        id: 136,
        question: "What is the function of a monitoring tool in the context of testing?",
        options: {
            A: "To keep track of the status of the system during use",
            B: "To measure the software's response times",
            C: "To automate the generation of test cases",
            D: "To manage the testing activities and resources"
        },
        correctAnswer: "A"
    },
    {
        id: 137,
        question: "What is the goal of a risk assessment in software testing?",
        options: {
            A: "To identify, analyze, and priorize risks",
            B: "To establish a communication plan",
            C: "To define software functionalities",
            D: "To assign tasks to the development team"
        },
        correctAnswer: "A"
    },
    {
        id: 138,
        question: "Which tool supports the review process during static testing?",
        options: {
            A: "Support reviews tool",
            B: "Model-based testing tool",
            C: "Test management tool",
            D: "Defect management tool"
        },
        correctAnswer: "A"
    },
    {
        id: 139,
        question: "Why is it important to prioritize incidents?",
        options: {
            A: "To ensure that minor defects are fixed first",
            B: "To focus resources on resolving the most critical defects first",
            C: "To complicate the development process",
            D: "To increase the number of incidents"
        },
        correctAnswer: "B"
    },
    {
        id: 140,
        question: "Which of the following is not a benefit of testing tools?",
        options: {
            A: "Easy to implement and maintain",
            B: "Reduce of repetitive work",
            C: "Ability to detect tiny changes that a human could not",
            D: "It produces more consistent result."
        },
        correctAnswer: "A"
    },
    {
        id: 141,
        question: "What information is typically included in the summary section of an incident report? (Choose 2 correct answers)",
        options: {
            A: "Personal opinions of the tester.",
            B: "Test progress metrics.",
            C: "Incident description and impact.",
            D: "Steps to reproduce the issue."
        },
        correctAnswer: "CD"
    },
    {
        id: 142,
        question: "What is an advantage of using data-driven scripts in test automation?",
        options: {
            A: "They do not require external data",
            B: "They separate test data from scripts, enhancing flexibility",
            C: "They are simpler to maintain than linear scripts",
            D: "They eliminate the need for scripting knowledge"
        },
        correctAnswer: "B"
    },
    {
        id: 143,
        question: "Who is responsible for testing in Agile methodology?",
        options: {
            A: "The developers",
            B: "The testers",
            C: "The whole team",
            D: "The product owner"
        },
        correctAnswer: "C"
    },
    {
        id: 144,
        question: "What are the success factors for implementing a new test tool? (Select all that apply)",
        options: {
            A: "Providing ongoing training",
            B: "Adapting processes to fit the tool",
            C: "Immediate organization-wide rollout",
            D: "Continuous monitoring of tool benefits"
        },
        correctAnswer: "ABD"
    },
    {
        id: 145,
        question: "Which tool would be most appropriate for testing the load capacity of a server?",
        options: {
            A: "Test management tool",
            B: "Incident management tool",
            C: "Load testing tool",
            D: "Configuration management tool"
        },
        correctAnswer: "C"
    },
    {
        id: 146,
        question: "What is an example that is NOT risk?",
        options: {
            A: "Member takes 3 days off sick, delays deadline.",
            B: "In the team, there is a member who has developed a library, helping to improve work performance.",
            C: "Member lacks technical skills.",
            D: "The assignment schedule must exclude days off and holidays.",
            E: "Whenever we cross the road, there is some risk that we'll be injured by a car."
        },
        correctAnswer: "B"
    },
    {
        id: 147,
        question: "How does early testing benefit the software development process?",
        options: {
            A: "By delaying defect detection until after release",
            B: "By identifying defects only at the final stages",
            C: "By finding defects early when they are cheaper to fix",
            D: "By increasing the overall cost of testing"
        },
        correctAnswer: "C"
    },
    {
        id: 148,
        question: "What should be a key outcome of the evaluating exit criteria and reporting phase?",
        options: {
            A: "Decisions regarding the continuation or stoppage of testing",
            B: "Finalizing the software release without further review",
            C: "Planning for the next development cycle",
            D: "Developing new test tools and methods"
        },
        correctAnswer: "A"
    },
    {
        id: 149,
        question: "What is the most effective way to use testing to improve quality?",
        options: {
            A: "By focusing on areas of the software most likely to have defects",
            B: "By performing minimal testing on all features",
            C: "By only testing the new features of the software",
            D: "By outsourcing testing to reduce costs"
        },
        correctAnswer: "A"
    },
    {
        id: 150,
        question: "What is the primary benefit of understanding the psychological factors in testing?",
        options: {
            A: "It allows for complete automation of the testing process.",
            B: "It enhances the interaction and effectiveness of the testing team.",
            C: "It eliminates the need for quality assurance.",
            D: "It simplifies compliance with software standards."
        },
        correctAnswer: "B"
    },
    {
        id: 151,
        question: "Which approach helps in maintaining good relationships between testers and developers?",
        options: {
            A: "Minimizing interaction between testers and developers",
            B: "Encouraging competition on defect findings",
            C: "Providing constructive feedback on defects",
            D: "Focusing solely on automated tests"
        },
        correctAnswer: "C"
    },
    {
        id: 152,
        question: "Why is the test environment set-up included in test implementation?",
        options: {
            A: "It is only relevant during test case design",
            B: "It is part of the test closure activities",
            C: "It is used for developing test cases",
            D: "The environment needs to be ready for executing test cases"
        },
        correctAnswer: "D"
    },
    {
        id: 153,
        question: "What is the 'Pesticide Paradox' in testing?",
        options: {
            A: "Testing all combinations is impossible.",
            B: "Same tests over time detect fewer issues",
            C: "Testing must be exhaustive to find all bugs.",
            D: "Defects tend to cluster in specific modules."
        },
        correctAnswer: "B"
    },
    {
        id: 154,
        question: "Find the explanation of \"Exhaustive testing is impossible\":",
        options: {
            A: "Testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases. Instead of exhaustive testing, we use risks and priorities to focus testing efforts.",
            B: "Math formulas for reports that the software will automatically generate.",
            C: "Is to execute the same test scenario multiple times to ensure that the previous test did not miss any errors.",
            D: "Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness."
        },
        correctAnswer: "A"
    },
    {
        id: 155,
        question: "Find the explanation of \"Early testing\":",
        options: {
            A: "Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives.",
            B: "Testing can show that detects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness.",
            C: "Finding and fixing defects does not help if the system built is unusable and does not fulfill the users' needs and expectations.",
            D: "Testing is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site."
        },
        correctAnswer: "A"
    },
    {
        id: 156,
        question: "Fill in the blank: Confirmation testing___",
        options: {
            A: "Execute the test again to confirm that the defect has indeed been fixed",
            B: "Execute tests with the intent of checking that the system does not now have more defects in it as a resultof some change",
            C: "Verify that modifications in the software or the environment have not caused unintended adverse side effects and that the system still meets its requirements",
            D: "Validate the expected results."
        },
        correctAnswer: "A"
    },
    {
        id: 157,
        question: "What is the role of regression testing in maintenance testing?",
        options: {
            A: "To ensure that new features disrupt existing functionalities.",
            B: "To verify that bug fixes and enhancements do not introduce new defects into existing functionalities.",
            C: "To check the functionality of new hardware only.",
            D: "To focus testing solely on new features."
        },
        correctAnswer: "B"
    },
    {
        id: 158,
        question: "Why is impact analysis important in maintenance testing?",
        options: {
            A: "It determines the effect of a new marketing campaign",
            B: "It is used to decide the new features to be added to the system",
            C: "It assesses how changes might affect the existing system components",
            D: "It helps in redesigning the software interface"
        },
        correctAnswer: "C"
    },
    {
        id: 159,
        question: "What does change-related testing include?",
        options: {
            A: "Performance and stress testing",
            B: "Confirmation and regression testing",
            C: "Usability and compliance testing",
            D: "Security and reliability testing"
        },
        correctAnswer: "B"
    },
    {
        id: 160,
        question: "What is the primary objective of functional testing?",
        options: {
            A: "To assess the system's non-functional characteristics like performance.",
            B: "To verify that the software functions according to the specified requirements.",
            C: "To evaluate the system's capacity to handle high loads.",
            D: "To check the internal code structure of the software."
        },
        correctAnswer: "B"
    },
    {
        id: 161,
        question: "A____ consists of a set of test cases covering the end-to-end functionality of a software application",
        options: {
            A: "Test Case",
            B: "Test scenario",
            C: "Test scripts",
            D: "None of the mentioned"
        },
        correctAnswer: "B"
    },
    {
        id: 162,
        question: "Which test level focuses on individual units or components?",
        options: {
            A: "System testing",
            B: "Integration testing",
            C: "Unit testing",
            D: "Acceptance testing"
        },
        correctAnswer: "C"
    },
    {
        id: 163,
        question: "How does usability testing differ from performance testing?",
        options: {
            A: "Usability testing focuses on user-friendliness, while performance testing measures operational capabilities.",
            B: "Usability testing measures how fast the system responds to requests, while performance testing checks or user-friendliness.",
            C: "They do not differ, both terms describe the same tests.",
            D: "Usability testing is a type of performance testing."
        },
        correctAnswer: "A"
    },
    {
        id: 164,
        question: "What is Integration testing?",
        options: {
            A: "It tests interfaces between components, interactions to different parts of a system such as an operating system, file system and hardware or interfaces between systems.",
            B: "It is unit, module and program testing, searches for defects in, and verifies the functioning of software that are separately testable.",
            C: "It is concerned with the behavior of the whole system/product as defined by the scope of a development project or product",
            D: "The system will be delivered to the user or customer for testing."
        },
        correctAnswer: "A"
    },
    {
        id: 165,
        question: "Which test level verifies the application meets business requirements?",
        options: {
            A: "Unit testing",
            B: "System testing",
            C: "Integration testing",
            D: "Acceptance testing"
        },
        correctAnswer: "D"
    },
    {
        id: 166,
        question: "What is the purpose of a walkthrough?",
        options: {
            A: "To finalize the document under review",
            B: "To educate participants and gather feedback",
            C: "To detect critical defects",
            D: "To automate review processes"
        },
        correctAnswer: "B"
    },
    {
        id: 167,
        question: "Which of the following is NOT a benefit of static testing in software development?",
        options: {
            A: "Improving communication between team members in the course of participating in reviews",
            B: "Reducing testing cost and time",
            C: "Reducing development cost and time",
            D: "Reducing the need for documentation"
        },
        correctAnswer: "D"
    },
    {
        id: 168,
        question: "Which of the following options are roles in a formal review?",
        options: {
            A: "Developer, Moderator, Review leader, Reviewer, Tester",
            B: "Author, Moderator, Manager, Reviewer, Developer",
            C: "Author, Manager, Review leader, Reviewer, Designer",
            D: "Author, Moderator, Review leader, Reviewer, Scribe"
        },
        correctAnswer: "D"
    },
    {
        id: 169,
        question: "Which static testing technique analyzes code without executing it?",
        options: {
            A: "Error guessing",
            B: "Equivalence partitioning",
            C: "Code review",
            D: "Decision table testing"
        },
        correctAnswer: "C"
    },
    {
        id: 170,
        question: "Reviews, walkthroughs, and inspections are part of___",
        options: {
            A: "Design process",
            B: "Validation process",
            C: "Verification process",
            D: "Management process"
        },
        correctAnswer: "C"
    },
    {
        id: 171,
        question: "Which of the following sequences BEST shows the main activities of the work product review process?",
        options: {
            A: "Initiate review - Reviewer selection - Individual review - Issue communication and analysis - Rework",
            B: "Planning & preparation - Overview meeting - Individual review - Foxing and Reporting",
            C: "Preparation - Issue detection - Issue communication and analysis - Rework -Report",
            D: "Planning - Initiate review - Individual review - Issue communication and analysis - Fixing and Reporting"
        },
        correctAnswer: "D"
    },
    {
        id: 172,
        question: "What is the main goal of static testing?",
        options: {
            A: "To execute the software and identify defects",
            B: "To review documents and source code without executing the software",
            C: "To test the software with a focus on its user interface",
            D: "To validate the software's performance under stress"
        },
        correctAnswer: "B"
    },
    {
        id: 173,
        question: "A typical formal review process consists of five main steps. Which is the correct order?",
        options: {
            A: "Planning - Individual review - Initiate review -> Issue communication & Analysis -> Fixing & Reporting",
            B: "Planning -> Initiate review -> Individual review -> Issue communication & Analysis -> Fixing & Reporting",
            C: "Initiate review -> Planning -> Individual review -> Issue communication & Analysis -> Fixing & Reporting",
            D: "Planning -> Issue communication & Analysis -> Initiate review -> Individual review -> Fixing & Reporting"
        },
        correctAnswer: "B"
    },
    {
        id: 174,
        question: "Which of the following is a benefit of performing reviews in the software development process?",
        options: {
            A: "Decreasing the amount of documentation required",
            B: "Eliminating the need for testing the software",
            C: "Identifying defects early and thereby reducing rework costs",
            D: "Extending the software development lifecycle"
        },
        correctAnswer: "C"
    },
    {
        id: 175,
        question: "Design a test case using Equivalence Partitioning for a function that calculates discounts based on Customer age: (Select all that apply)",
        options: {
            A: "1-12 years: 50% discount",
            B: "13-64 years: 20% discount",
            C: "65 years and above: 30% discount",
            D: "None of the others"
        },
        correctAnswer: "ABC"
    },
    {
        id: 176,
        question: "What factor influences the structure of a test organization within a project?",
        options: {
            A: "The personal preferences of the test team",
            B: "The social dynamics of the development team",
            C: "The risk level and complexity of the project",
            D: "The geographical location of the company"
        },
        correctAnswer: "C"
    },
    {
        id: 177,
        question: "What is the significance of defining scope in a test plan?",
        options: {
            A: "It outlines the geographical areas where the product will be sold",
            B: "It determines who the end-users will be",
            C: "It clarifies what is included and excluded from testing",
            D: "It sets the price points for various market segments"
        },
        correctAnswer: "C"
    },
    {
        id: 178,
        question: "In a software project, what is the purpose of test closure activities?",
        options: {
            A: "To plan the next phases of the project.",
            B: "To ensure all test cases are automated for future use.",
            C: "To analyze what was done and what could be improved for future projects.",
            D: "To ensure that the software does not have any remaining defects."
        },
        correctAnswer: "C"
    },
    {
        id: 179,
        question: "Which of the following best describes the role of a test manager?",
        options: {
            A: "Direct involvement in software programming",
            B: "Management of the testing process and resources",
            C: "Exclusive focus on software design",
            D: "Handling customer support and feedback"
        },
        correctAnswer: "B"
    },
    {
        id: 180,
        question: "Which tool is specifically designed to support the creation of test cases?",
        options: {
            A: "Test design tool",
            B: "Test execution tool",
            C: "Static analysis tool",
            D: "Test management tool"
        },
        correctAnswer: "A"
    }
];
