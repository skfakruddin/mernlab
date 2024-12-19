    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000);
    }
    function showContent(section) {
        const content = document.getElementById("content");
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach(tab => tab.classList.remove("active"));
        event.target.classList.add("active");
        switch (section) {
            case "hallmarks":
                content.innerHTML = `
                        <div id="content" class="content">
    <div class="box1">
        <p>PVP Siddhartha Institute of Technology, established in <span class="highlight">1998</span>, is a pioneering Institute out of the 18 Academic Institutions run under the aegis of the premier Organization, <span class="highlight-red">Siddhartha Academy of General & Technical Education, Vijayawada</span>.</p>
    </div>
    <div class="content1">
    <div class="box">NAAC has conferred <span class="highlight-red">A+ grade</span> to the Institute.</div>
    <div class="box">All the UG Programmes offered are accredited by <span class="highlight-red">NBA</span>.</div>
    <div class="box">Renowned for Academic Excellence and Sustenance of Quality, the Institution is <span class="highlight-red">ISO 9001-2015 certified</span>.</div>
    <div class="box"><span class="highlight-red">100% ragging free environment.</span></div>
    <div class="box">Approved by <span class="highlight-red">AICTE</span> and permanently affiliated to <span class="highlight-red">JNTUK</span>.</div>
    <div class="box"><span class="highlight-red">Autonomous College Status</span> since 2012 providing the curriculum in line with the current and future Industrial requirements.</div>
    <div class="box"><span class="highlight-red">Outcome Based Education</span> form the basis for the entire learning system.</div>
    <div class="box"><span class="highlight-red">Industrial Internship</span> support and guidance for getting paid Internships.</div>
    <div class="box"><span class="highlight-red">Strong Training and Placement Cell</span> for nurturing students and making them employable.</div>
    <div class="box"><span class="highlight-red">Entrepreneurship</span> Support to the students to kick start their Ideas.</div>
    <div class="box">Active <span class="highlight-red">NSS</span> and <span class="highlight-red">NCC</span> wings to inculcate Social Responsibility.</div>
    <div class="box"><span class="highlight-red">Technical/Professional Societies</span> for learning beyond Classroom.</div>
    <div class="box"><span class="highlight-red">Cultural/Hobby Clubs</span> for allround Development of the students.</div>
</div>`;
                break;

            case "exams":
                content.innerHTML = `
                    <h2>Examination Notifications & Results</h2>
                    <p><a href="#">All Regular/Supplementary End Examinations Notifications/Timetables for October-2024, November-2024, December-2024</a></p>
                    <p><a href="#">For PVP19, PVP20, PVP23 Regular B.Tech Results Click Here</a></p>
                    <p><a href="#">For Revaluation B.Tech Results Click Here</a></p>
                    <div style="margin-top: 10px; padding: 10px; background-color: #e9e9e9; border: 1px solid #ccc;">
                        <a href="#">III-I, II-II B.Tech (PVP14) Supplementary Examinations November 2024 Results</a>
                        <span style="color: red; font-weight: bold;">NEW</span>
                    </div>
                `;
                break;
            case "circulars":
                content.innerHTML = `
                    <h2>Circulars</h2>
                    <p>No circulars available at this moment. Stay tuned for updates.</p>
                `;
                break;
            case "news":
                content.innerHTML = `
                    <h2>News & Events</h2>
                    <p>Upcoming events and latest news will be updated here.</p>
                `;
                break;
            default:
                content.innerHTML = "<h2>Welcome</h2><p>Select a tab to view content.</p>";
        }
    }
    window.onload = () => {
        showContent('hallmarks');
    };

    function showContent(section) {
        const content = document.getElementById("content");
        const tabs = document.querySelectorAll(".tab");

        tabs.forEach(tab => tab.classList.remove("active"));

        event.target.classList.add("active");

        switch (section) {
            case "About":
                content.innerHTML = `
                        <div id="content" class="about">
                             <h1>About the Department</h1>
    <p> The Department of Computer Science and Engineering was established in the year 1999. The department has started B.Tech program with an initial intake of 40 in the year 1999 and 180 from 2019 onwards.
         The Programme was accredited by NBA thrice in the years 2007, 2012 & 2016 under Tier-II and subsequently accredited under Tier-I in 2019 and 2022.
          The department has 36 qualified Faculty out of which 17 are having Ph.D. and 16 are pursuing Ph.D. Faculty publish quality research papers in SCI/Scopus indexed journals</p>
          <p>The department has state-of-the-art infrastructure and computing equipment worth about Rs. 3 Crores. Internet bandwidth 600 Mbps (1:1) leased line is available supported by SOPHOS firewall providing security. 
            The department has well-established classrooms and Laboratories equipped with LCD/LED projectors and audio systems.</p>
            <p> For the past three years, 90% of the students were placed in reputed industries with a Median salary of Rs. 4.5LPA and the highest pay package being Rs. 44 LPA. Good number of students have completed Internships from Premier Industries with stipend ranging from Rs. 25,000/- to Rs. 1,10,000/- per month.
                 Students are encouraged to participate in National level competitions held by premier Institutions like NITs/IITs/ AICTE Smart India Hackathons. Students from First year onwards are encouraged to do certification courses offered by NPTEL, Microsoft, Google, Infosys etc.</p>
</div>`;
                break;

            case "Vision":
                content.innerHTML = `
                 <h1>Vission</h1>
                    <ul>
                        <li>To be a centre of excellence in academics and research in Computer Science and Engineering and take up challenges for the benefit of society.</li>
                        </ul>
                `;
                break;

            case "Mission":
                content.innerHTML = `
                 <h1>Mission</h1>
                   <ul>
                        <li>Impart professional education through best curriculum in harmony with the industry needs.</li>
                        <li>Inculcate ethics, research capabilities and team work in the young minds so as to put efforts to the advancement of the nation.</li>
                        <li>Strive for student achievement and success with leadership qualities and preparing them for continuous learning in the global environment.</li>
                        </ul>
                `;
                break;

            case "PEO":
                content.innerHTML = `
                     <h1>Program Educational Objectives (PEO)</h1>
<ul>
    <li><strong>PEO - I:</strong> The graduates of the program will excel in the concepts of basic engineering and advanced concepts of computer science engineering.</li>
    <li><strong>PEO - II:</strong> The graduates of the program will be professional in computing industry or pursuing higher studies.</li>
    <li><strong>PEO - III:</strong> The graduates of the program will excel in team work, ethics, communication skills and contribute to the benefit to the society.</li>
</ul>
                `;
                break;
            case "PO":
                content.innerHTML = `
                <h1>Program  Outcomes (PO)</h1>
                     <ul>
    <li><strong>PO - 1:</strong> Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
    <li><strong>PO - 2:</strong> Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
    <li><strong>PO - 3:</strong> Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
    <li><strong>PO - 4:</strong> Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
    <li><strong>PO - 5:</strong> Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</li>
    <li><strong>PO - 6:</strong> The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
    <li><strong>PO - 7:</strong> Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
    <li><strong>PO - 8:</strong> Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
    <li><strong>PO - 9:</strong> Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>
    <li><strong>PO - 10:</strong> Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
    <li><strong>PO - 11:</strong> Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
    <li><strong>PO - 12:</strong> Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
</ul>
                `;
                break;
            case "PSO":
                content.innerHTML = `
                    <h1>Program Specific Outcomes (PSO)</h1>
                      <ul>
                       <li><strong>PSO - I:</strong> Apply the Knowledge of Computing Skills in building the Software Systems that meet the requirements of Industry and Society.</li>
                         <li><strong>PSO - II:</strong> Apply the Knowledge of Data Engineering and Communication Technologies for Developing Applications in the Domain of Smart and Intelligent Computing.</li>
                        </ul>
                `;
                break;

            default:
                content.innerHTML = "<h2>Welcome</h2><p>Select a tab to view content.</p>";
        }
    }

    window.onload = () => {
        showContent('about');
    };