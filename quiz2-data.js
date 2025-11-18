// SWT Quiz 2 Data - Questions 61-120
const quizData = [
    {
        id: 61,
        question: "When we test or review a product, what are we looking for?",
        options: {
            A: "We are looking for errors and fixing them.",
            B: "We are looking for defects in the product and thus are critical of it.",
            C: "We are looking for different between the system and the requirement.",
            D: "We are looking for the mistakes of the requirement."
        },
        correctAnswer: "B"
    },
    {
        id: 62,
        question: "What does the term 'failure' mean in the context of testing?",
        options: {
            A: "A mistake made by a developer.",
            B: "A defect in the software that is found during testing.",
            C: "An incorrect behavior of the system in operation.",
            D: "A missed requirement during design."
        },
        correctAnswer: "C"
    },
    {
        id: 63,
        question: "Independent testing - who is a tester?",
        options: {
            A: "Tests by the person who wrote the item under test.",
            B: "Tests by a person from a different organizational group, such as an independent test team.",
            C: "Tests by another person within the same team, such as another programmer.",
            D: "Tests by the person who wrote the source code."
        },
        correctAnswer: "B"
    },
    {
        id: 64,
        question: "What is the significance of context in testing according to the principles?",
        options: {
            A: "It is irrelevant since all testing follows the same standard.",
            B: "It is critical as testing approaches should vary based on the specific context",
            C: "It suggests that testing should always follow the same international standards.",
            D: "Context is only important in large, complex systems."
        },
        correctAnswer: "B"
    },
    {
        id: 65,
        question: "Find the explanation of \"Testing shows presence of defects\":",
        options: {
            A: "Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness.",
            B: "Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives",
            C: "Finding and fixing defects does not help if the system built is unusable and does not fulfill the users' needs and expectations.",
            D: "Testing is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site."
        },
        correctAnswer: "A"
    },
    {
        id: 66,
        question: "What types of defects are typically found more effectively during static testing than dynamic testing?",
        options: {
            A: "Performance-related defects",
            B: "Defects in user interface design",
            C: "Missing requirements or design defects",
            D: "Runtime errors and exceptions"
        },
        correctAnswer: "C"
    },
    {
        id: 67,
        question: "What is a key reason that software testing is necessary?",
        options: {
            A: "To increase software complexity",
            B: "To identify defects in software",
            C: "To reduce software features",
            D: "To speed up software development"
        },
        correctAnswer: "B"
    },
    {
        id: 68,
        question: "How much testing is enough?",
        options: {
            A: "Exhaustive testing is possible.",
            B: "Testing everything (all combinations of inputs and preconditions).",
            C: "We use risks and priorities to focus testing efforts.",
            D: "Full testing."
        },
        correctAnswer: "C"
    },
    {
        id: 69,
        question: "What is an effect of poor communication between testers and developers?",
        options: {
            A: "It enhances the efficiency of the development and testing processes.",
            B: "It may lead to misunderstandings and reduced software quality.",
            C: "It improves the independence of the testing function.",
            D: "It has no effect as long as testing is done independently."
        },
        correctAnswer: "B"
    },
    {
        id: 70,
        question: "Which strategies can help minimize psychological conflict between testers and developers? (Select multiple)",
        options: {
            A: "Fostering mutual respect between roles.",
            B: "Ensuring clear objectives for testing.",
            C: "Feedback belittles the coder with errors found.",
            D: "Encouraging collaboration on defect resolution."
        },
        correctAnswer: "ABD"
    },
    {
        id: 71,
        question: "What should integration testing primarily focus on?",
        options: {
            A: "Testing the database and data processing",
            B: "Ensuring that software modules work together",
            C: "Checking that the system is ready for live deployment",
            D: "Evaluating user satisfaction with the product"
        },
        correctAnswer: "B"
    },
    {
        id: 72,
        question: "How does stress testing differ from load testing?",
        options: {
            A: "Stress testing examines system performance under peak loads, while load testing focuses on typical conditions",
            B: "Stress testing is concerned with usability under stress, while load testing measures performance thresholds",
            C: "Stress testing evaluates system behavior beyond normal operational capacity, while load testing verifies normal usage conditions"
        },
        correctAnswer: "C"
    },
    {
        id: 73,
        question: "What is the main advantage of using the V-model in software development?",
        options: {
            A: "It eliminates the need for testing.",
            B: "It integrates testing throughout the development phases.",
            C: "It is less costly and time-consuming compared to other models.",
            D: "It focuses on post-development testing only."
        },
        correctAnswer: "B"
    },
    {
        id: 74,
        question: "What is the purpose of unit testing in software development?",
        options: {
            A: "To test the entire system as a whole",
            B: "To test individual units or components in isolation",
            C: "To validate the software against user requirements",
            D: "To perform performance testing"
        },
        correctAnswer: "B"
    },
    {
        id: 75,
        question: "What is a characteristic of non-functional testing?",
        options: {
            A: "It is always performed after functional testing.",
            B: "It focuses on how well the system performs certain actions.",
            C: "It is concerned solely with what the system does.",
            D: "It does not include performance testing."
        },
        correctAnswer: "B"
    },
    {
        id: 76,
        question: "What is not test type?",
        options: {
            A: "Structural testing",
            B: "Functional testing",
            C: "Non-functional testing",
            D: "Performance testing",
            E: "Change-related testing"
        },
        correctAnswer: "A"
    },
    {
        id: 77,
        question: "What is the role of performance testing in system testing?",
        options: {
            A: "To verify that the system behaves correctly under load",
            B: "To ensure that the system meets functional requirements",
            C: "To check the accuracy of data processing",
            D: "To confirm that the system is bug-free"
        },
        correctAnswer: "A"
    },
    {
        id: 78,
        question: "What does the term \"Big-bang model\" imply about the approach to software development?",
        options: {
            A: "Detailed and extensive planning",
            B: "Integration of all components at once without prior testing",
            C: "Regular testing from the beginning of the project",
            D: "User involvement is mandatory"
        },
        correctAnswer: "B"
    },
    {
        id: 79,
        question: "What is the typical sequence of testing activities in the Waterfall model?",
        options: {
            A: "System testing, integration testing, acceptance testing",
            B: "Acceptance testing, system testing, integration testing",
            C: "Integration testing, system testing, acceptance testing",
            D: "Component testing, system testing, integration testing"
        },
        correctAnswer: "C"
    },
    {
        id: 80,
        question: "In which testing level would you test for defects in the interfaces and interaction between integrated components?",
        options: {
            A: "Component testing",
            B: "Integration testing",
            C: "System testing",
            D: "Acceptance testing"
        },
        correctAnswer: "B"
    },
    {
        id: 81,
        question: "What is dynamic testing?",
        options: {
            A: "Software work products are examined manually, or with a set of tools, but not executed.",
            B: "Software is executed using a set of input values and its output is then examined and compared to what is expected.",
            C: "Testing can start early in the life cycle, early feedback on quality issues can be established.",
            D: "Testing can start early validation of user requirements and not just late in the life cycle during acceptance testing."
        },
        correctAnswer: "B"
    },
    {
        id: 82,
        question: "Why are rules and checklists used during inspections?",
        options: {
            A: "To reduce the time spent on discussions",
            B: "To ensure consistency and thoroughness in defect identification",
            C: "To allow participants to avoid preparation",
            D: "To document defects for legal compliance"
        },
        correctAnswer: "B"
    },
    {
        id: 83,
        question: "Which of the following is most likely to be performed by developers?",
        options: {
            A: "Technical review of a functional specification.",
            B: "Walkthrough of a requirements document.",
            C: "Informal review of a program specification.",
            D: "Static analysis of a software model."
        },
        correctAnswer: "D"
    },
    {
        id: 84,
        question: "What is a primary difference between static and dynamic testing techniques?",
        options: {
            A: "Static testing involves executing the code, while dynamic does not",
            B: "Static testing does not involve executing the code, while dynamic does",
            C: "Static testing is only performed by developers, while dynamic is not",
            D: "Static testing cannot find defects, while dynamic can"
        },
        correctAnswer: "B"
    },
    {
        id: 85,
        question: "How do reviews support software quality assurance?",
        options: {
            A: "By focusing solely on end-user needs",
            B: "By providing a way to check compliance with standards",
            C: "By testing software functionality through execution",
            D: "By replacing the need for project management"
        },
        correctAnswer: "B"
    },
    {
        id: 86,
        question: "How do technical reviews differ from informal reviews?",
        options: {
            A: "Technical reviews are less structured and more ad-hoc",
            B: "Technical reviews require the presence of software architects",
            C: "Technical reviews are led by a trained moderator and follow a defined process",
            D: "Informal reviews do not involve developers"
        },
        correctAnswer: "C"
    },
    {
        id: 87,
        question: "Which of the following are the main activities of the work product review process?\n1.Planning\n2. Initiate review\n3. Select reviewers\n4. Individual review\n5.Review meeting\n6.Evaluating review findings against exit criteria\n7.Issue communication and analysis\n8.Fixing and reporting",
        options: {
            A: "1,2,4,7,8",
            B: "2,3,4,5,8",
            C: "1,2,3,5,7",
            D: "1,4,5,6,7"
        },
        correctAnswer: "A"
    },
    {
        id: 88,
        question: "What is a key feature of static analysis tools?",
        options: {
            A: "Executing the code",
            B: "Checking coding standards",
            C: "Testing system performance",
            D: "Automating user feedback"
        },
        correctAnswer: "B"
    },
    {
        id: 89,
        question: "What is static testing?",
        options: {
            A: "Software work products are examined manually, or with a set of tools, but not executed.",
            B: "Software is executed using a set of input values and its output is then examined and compared to what is expected.",
            C: "Execution is applied as a technique to detect defects and to determine quality attributes of the code",
            D: "Testing can start after dynamic testing."
        },
        correctAnswer: "A"
    },
    {
        id: 90,
        question: "What is the main purpose of specification-based testing techniques?",
        options: {
            A: "To evaluate the system's behavior from an external perspective",
            B: "To assess the internal structure of the software",
            C: "To improve the software design",
            D: "To test the software without any formal requirements"
        },
        correctAnswer: "A"
    },
    {
        id: 91,
        question: "Why is decision coverage important in white-box testing?",
        options: {
            A: "It measures the software's performance metrics",
            B: "It verifies the compatibility of new code with existing systems",
            C: "It focuses on the user interface aspects of the software",
            D: "It guarantees that all branches in decision points are executed"
        },
        correctAnswer: "D"
    },
    {
        id: 92,
        question: "Which scenario is ideal for using exploratory testing?",
        options: {
            A: "When there is limited time and no detailed specifications",
            B: "When detailed specifications are available",
            C: "When the software is fully stable",
            D: "When testing under controlled and stable conditions"
        },
        correctAnswer: "A"
    },
    {
        id: 93,
        question: "For the password field (8-12 alphanumeric characters), which of the following is a valid boundary value?",
        options: {
            A: "7 characters",
            B: "8 characters",
            C: "13 characters",
            D: "10 characters"
        },
        correctAnswer: "B"
    },
    {
        id: 94,
        question: "Which white box technique has the main goal of ensuring that each one of the possible branches from each decision point is executed at least once?",
        options: {
            A: "Basis path coverage testing",
            B: "Statement coverage testing",
            C: "Branch coverage testing",
            D: "Condition coverage testing"
        },
        correctAnswer: "C"
    },
    {
        id: 95,
        question: "Which type of test design technique is based on the tester's skills, intuition, and experience in testing?",
        options: {
            A: "Black-box testing",
            B: "White-box testing",
            C: "Experience-based testing",
            D: "Specification-based testing"
        },
        correctAnswer: "C"
    },
    {
        id: 96,
        question: "Given the following pseudo-code, which is true about the minimum number of test cases required for full statement and branch coverage:\nRead A\nRead B\nIF A-B > 50 THEN\nPrint \"Sum A and B\"\nIF B > 10 THEN\nPrint \"B is greater than 10\"\nENDIF\nENDIF",
        options: {
            A: "1 test case for statement coverage, 2 for branch coverage",
            B: "1 test case for statement coverage, 3 for branch coverage",
            C: "2 test case for statement coverage, 2 for branch coverage"
        },
        correctAnswer: "B"
    },
    {
        id: 97,
        question: "What is the main purpose of use case testing?",
        options: {
            A: "To identify defects in process flows related to typical use of the system.",
            B: "To identify defects in the connections between components.",
            C: "To identify defects in the system related to extreme scenarios.",
            D: "To identify defects in the system related to the use of unapproved programming practices."
        },
        correctAnswer: "A"
    },
    {
        id: 98,
        question: "Why is equivalence partitioning particularly effective in test case design?",
        options: {
            A: "It requires thorough knowledge of the internal structure of the system",
            B: "It divides input data into valid and invalid partitions to simplify testing",
            C: "It focuses solely on the output of the software",
            D: "It is the best method for performance testing"
        },
        correctAnswer: "B"
    },
    {
        id: 99,
        question: "Which of the following statement is true about the bug/defect report?",
        options: {
            A: "It is technical document written to describe the symptoms of a bug.",
            B: "It is designed to prescribe the scope, approach, resources, and schedule of all testing activities.",
            C: "It is a document that delivers a detailed summary of what scenarios will be tested in a software during the software testing life cycle (STLC)",
            D: "It is used to confirm the function of the application when the code is executed."
        },
        correctAnswer: "A"
    },
    {
        id: 100,
        question: "What role is responsible for leading the test effort?",
        options: {
            A: "Test manager",
            B: "Test designer",
            C: "Test analyst",
            D: "Tester"
        },
        correctAnswer: "A"
    },
    {
        id: 101,
        question: "What is NOT a goal of incident management?",
        options: {
            A: "Fixing all defects regardless of their impact",
            B: "Improving the quality of the software product",
            C: "Reducing the risk of future defects",
            D: "Ensuring stakeholder satisfaction with the product"
        },
        correctAnswer: "A"
    },
    {
        id: 102,
        question: "Which of the following is a risk of test automation?",
        options: {
            A: "Using an automation tool that will not be supported in the future",
            B: "Developing test automation for particularly tedious manual testing areas",
            C: "Using technical testers to implement the automation",
            D: "Developing automated reporting"
        },
        correctAnswer: "A"
    },
    {
        id: 103,
        question: "How would you structure a test team for a project requiring specialized knowledge in both business processes and technical execution?",
        options: {
            A: "Assign only developers as testers",
            B: "Use only external consultants",
            C: "Focus on regression testing",
            D: "Combine business experts with technical testers"
        },
        correctAnswer: "D"
    },
    {
        id: 104,
        question: "Which of the following tasks is MOST LIKELY to be performed by the test manager?",
        options: {
            A: "Write test summary reports based on the information gathered during testing",
            B: "Review tests developed by others",
            C: "Create the detailed test execution schedule",
            D: "Analyze, review, and assess requirements, specifications and models for testability"
        },
        correctAnswer: "A"
    },
    {
        id: 105,
        question: "Which one of the following test tools is mostly suitable for developers rather than testers?",
        options: {
            A: "Requirement management tools",
            B: "Configuration management tools",
            C: "Defect management tools",
            D: "Performance testing tools"
        },
        correctAnswer: "B"
    },
    {
        id: 106,
        question: "Which element is critical in a test estimate?",
        options: {
            A: "The graphical design of the test documentation",
            B: "The time and resources required to complete testing",
            C: "The color scheme for the test report",
            D: "The number of developers in the team"
        },
        correctAnswer: "B"
    },
    {
        id: 107,
        question: "Which is a key benefit of risk-based testing?",
        options: {
            A: "It reduces the need for a test plan",
            B: "It ensures all defects are identified and fixed",
            C: "It optimizes test coverage by focusing on high-risk areas",
            D: "It eliminates the need for regression testing"
        },
        correctAnswer: "C"
    },
    {
        id: 108,
        question: "Which of the following is a benefit of effective incident management?",
        options: {
            A: "Increased software development time",
            B: "Decreased software reliability",
            C: "Improved customer satisfaction",
            D: "Reduced software functionality"
        },
        correctAnswer: "C"
    },
    {
        id: 109,
        question: "Which of the following statement is CORRECT about of decision coverage?",
        options: {
            A: "Decision coverage is a measure of the percentage of possible paths through the source code exercised by tests",
            B: "Decision coverage is a measure of the percentage of business flows through the component exercised by tests",
            C: "Decision coverage is a measure of the 'if' statements in the code that are exercised with both the true and false outcomes",
            D: "Decision coverage is a measure of the proportion of decision outcomes in the source code exercised by tests"
        },
        correctAnswer: "D"
    },
    {
        id: 110,
        question: "Which one of the following is MOST likely to be a benefit of test execution tools?",
        options: {
            A: "It is easy to create regression tests",
            B: "It is easy to maintain version control of test assets",
            C: "It is easy to design tests for security testing",
            D: "It is easy to run regression tests"
        },
        correctAnswer: "D"
    },
    {
        id: 111,
        question: "What is NOT typically a feature of a test management tool?",
        options: {
            A: "Scheduling tests",
            B: "Generating test data",
            C: "Logging test results",
            D: "Managing testing activities"
        },
        correctAnswer: "B"
    },
    {
        id: 112,
        question: "Which metric would help monitor the progress of test execution?",
        options: {
            A: "Number of open defects compared to closed defects.",
            B: "Number of passed requirements per code line",
            C: "Project manager's confidence level",
            D: "Test script reusability percentage"
        },
        correctAnswer: "A"
    },
    {
        id: 113,
        question: "What is a key feature of a test execution tool?",
        options: {
            A: "Managing requirements traceability",
            B: "Supporting static code analysis",
            C: "Automatically running tests and recording results",
            D: "Managing test incidents"
        },
        correctAnswer: "C"
    },
    {
        id: 114,
        question: "What type of test tool would you use to ensure coding standards are met?",
        options: {
            A: "Test design tool",
            B: "Test execution tool",
            C: "Static analysis tool",
            D: "Configuration management tool"
        },
        correctAnswer: "C"
    },
    {
        id: 115,
        question: "Which of the following tools would you use for dynamic analysis? (Choose 2 correct answers)",
        options: {
            A: "Static analysis tools",
            B: "Test management tools",
            C: "Performance testing tools",
            D: "Monitoring tools"
        },
        correctAnswer: "CD"
    },
    {
        id: 116,
        question: "What is a characteristic feature of a test harness?",
        options: {
            A: "Schedules tests",
            B: "Supplies inputs to the software being tested",
            C: "Manages software incidents",
            D: "Analyzes software performance"
        },
        correctAnswer: "B"
    },
    {
        id: 117,
        question: "___is the process of testing a single unit of code in an isolated manner and can be a method, a class, or a module.",
        options: {
            A: "Integration Testing",
            B: "Unit Testing",
            C: "Acceptance Testing",
            D: "System Testing"
        },
        correctAnswer: "B"
    },
    {
        id: 118,
        question: "Which one is not comes under international standard: (choose one answer)",
        options: {
            A: "IEC",
            B: "IEEE",
            C: "ISO",
            D: "All of the others"
        },
        correctAnswer: "D"
    },
    {
        id: 119,
        question: "The purpose of exit criteria is: (choose one answer)",
        options: {
            A: "Define when to stop testing",
            B: "End of test level",
            C: "When a set of tests has achieved a specific pre condition",
            D: "All of the others"
        },
        correctAnswer: "D"
    },
    {
        id: 120,
        question: "Faults found by users are due to:",
        options: {
            A: "Insufficient time for testing",
            B: "Poor software and poor testing",
            C: "Bad luck"
        },
        correctAnswer: "B"
    }
];
