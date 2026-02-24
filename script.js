// University Details Database with Detailed Course Fees & Hostel Charges
const universityDetails = {
    'Delhi Institute of Technology': {
        fullName: 'Delhi Institute of Technology (DIT)',
        courses: [
            { name: 'B.Tech CSE (Computer Science)', fee: '₹4.5 LPA', placement: '95%', package: '₹18-22 LPA' },
            { name: 'B.Tech ECE', fee: '₹4 LPA', placement: '90%', package: '₹15-18 LPA' },
            { name: 'B.Tech Mechanical', fee: '₹3.8 LPA', placement: '85%', package: '₹12-16 LPA' },
            { name: 'B.Tech Civil', fee: '₹3.5 LPA', placement: '80%', package: '₹10-14 LPA' }
        ],
        hostel: {
            single: '₹95,000/year',
            double: '₹75,000/year',
            triple: '₹60,000/year'
        },
        placement: '90%+',
        ranking: 'Private Engineering',
        city: 'Noida, UP'
    },
    'Galgotias University': {
        fullName: 'Galgotias University',
        courses: [
            { name: 'B.Tech CSE', fee: '₹3.5 LPA', placement: '92%', package: '₹16-20 LPA' },
            { name: 'B.Tech Information Technology', fee: '₹3.5 LPA', placement: '93%', package: '₹17-21 LPA' },
            { name: 'MBA', fee: '₹2.5 LPA', placement: '88%', package: '₹10-15 LPA' },
            { name: 'BCA', fee: '₹2 LPA', placement: '85%', package: '₹8-12 LPA' }
        ],
        hostel: {
            single: '₹85,000/year',
            double: '₹68,000/year',
            triple: '₹55,000/year'
        },
        placement: '85%+',
        ranking: 'Private University',
        city: 'Greater Noida, UP'
    },
    'Manav Rachna University': {
        fullName: 'Manav Rachna University',
        courses: [
            { name: 'B.Tech CSE', fee: '₹3.8 LPA', placement: '90%', package: '₹15-19 LPA' },
            { name: 'B.Tech ECE', fee: '₹3.5 LPA', placement: '88%', package: '₹13-17 LPA' },
            { name: 'BBA', fee: '₹2.2 LPA', placement: '85%', package: '₹8-12 LPA' },
            { name: 'MCA', fee: '₹2.5 LPA', placement: '90%', package: '₹10-14 LPA' }
        ],
        hostel: {
            single: '₹90,000/year',
            double: '₹72,000/year',
            triple: '₹58,000/year'
        },
        placement: '85%+',
        ranking: 'Private Engineering',
        city: 'Faridabad/Noida NCR'
    },
    'Lloyd Institute': {
        fullName: 'Lloyd Institute of Technology',
        courses: [
            { name: 'B.Tech CSE', fee: '₹3.2 LPA', placement: '88%', package: '₹14-18 LPA' },
            { name: 'B.Tech Mechanical', fee: '₹3 LPA', placement: '85%', package: '₹12-15 LPA' },
            { name: 'BCA', fee: '₹1.8 LPA', placement: '82%', package: '₹7-10 LPA' },
            { name: 'MCA', fee: '₹2 LPA', placement: '85%', package: '₹9-12 LPA' }
        ],
        hostel: {
            single: '₹80,000/year',
            double: '₹65,000/year',
            triple: '₹52,000/year'
        },
        placement: '85%+',
        ranking: 'Private Engineering',
        city: 'Greater Noida, UP'
    },
    'GL Bajaj Institute': {
        fullName: 'GL Bajaj Institute of Technology & Management',
        courses: [
            { name: 'B.Tech CSE', fee: '₹3.5 LPA', placement: '90%', package: '₹15-18 LPA' },
            { name: 'B.Tech ECE', fee: '₹3.3 LPA', placement: '87%', package: '₹13-16 LPA' },
            { name: 'MBA', fee: '₹2.3 LPA', placement: '86%', package: '₹9-13 LPA' },
            { name: 'BCA', fee: '₹2 LPA', placement: '84%', package: '₹8-11 LPA' }
        ],
        hostel: {
            single: '₹82,000/year',
            double: '₹66,000/year',
            triple: '₹53,000/year'
        },
        placement: '86%+',
        ranking: 'Private Institute',
        city: 'Greater Noida, UP'
    },
    'Ajay Kumar Garg': {
        fullName: 'Ajay Kumar Garg University',
        courses: [
            { name: 'B.Tech CSE', fee: '₹3.6 LPA', placement: '89%', package: '₹15-19 LPA' },
            { name: 'B.Tech Information Technology', fee: '₹3.5 LPA', placement: '90%', package: '₹16-20 LPA' },
            { name: 'BBA', fee: '₹2.1 LPA', placement: '84%', package: '₹8-11 LPA' },
            { name: 'MCA', fee: '₹2.3 LPA', placement: '87%', package: '₹10-13 LPA' }
        ],
        hostel: {
            single: '₹87,000/year',
            double: '₹70,000/year',
            triple: '₹56,000/year'
        },
        placement: '88%+',
        ranking: 'Private University',
        city: 'Ghaziabad, UP'
    },
    'Shobhit University': {
        fullName: 'Shobhit University',
        courses: [
            { name: 'B.Tech CSE', fee: '₹2.8 LPA', placement: '87%', package: '₹13-17 LPA' },
            { name: 'BA LLB (5 years)', fee: '₹3 LPA', placement: '85%', package: 'Case-based' },
            { name: 'BBA LLB', fee: '₹3.2 LPA', placement: '86%', package: 'Variable' },
            { name: 'BCA', fee: '₹1.8 LPA', placement: '83%', package: '₹7-10 LPA' }
        ],
        hostel: {
            single: '₹78,000/year',
            double: '₹62,000/year',
            triple: '₹50,000/year'
        },
        placement: '85%+',
        ranking: 'Private Engineering & Law',
        city: 'Meerut, UP'
    },
    'Vivekananda Institute': {
        fullName: 'Vivekananda Institute of Technology',
        courses: [
            { name: 'B.Tech CSE', fee: '₹3 LPA', placement: '85%', package: '₹12-16 LPA' },
            { name: 'B.Tech Mechanical', fee: '₹2.8 LPA', placement: '82%', package: '₹10-14 LPA' },
            { name: 'BCA', fee: '₹1.7 LPA', placement: '80%', package: '₹6-9 LPA' },
            { name: 'MCA', fee: '₹1.9 LPA', placement: '83%', package: '₹8-11 LPA' }
        ],
        hostel: {
            single: '₹75,000/year',
            double: '₹60,000/year',
            triple: '₹48,000/year'
        },
        placement: '82%+',
        ranking: 'Private Engineering',
        city: 'Meerut/Ghaziabad, UP'
    },
    'LPU': {
        fullName: 'Lovely Professional University (LPU)',
        courses: [
            { name: 'B.Tech CSE', fee: '₹4.2 LPA', placement: '93%', package: '₹17-22 LPA' },
            { name: 'B.Tech IT', fee: '₹4 LPA', placement: '94%', package: '₹18-23 LPA' },
            { name: 'MBA', fee: '₹2.8 LPA', placement: '90%', package: '₹12-16 LPA' },
            { name: 'BCA', fee: '₹2.2 LPA', placement: '88%', package: '₹9-13 LPA' }
        ],
        hostel: {
            single: '₹92,000/year',
            double: '₹74,000/year',
            triple: '₹59,000/year'
        },
        placement: '90%+',
        ranking: 'Top Private University',
        city: 'Punjab'
    },
    'VIT University': {
        fullName: 'VIT University',
        courses: [
            { name: 'B.Tech CSE', fee: '₹4.5 LPA', placement: '96%', package: '₹20-25 LPA' },
            { name: 'B.Tech IT', fee: '₹4.3 LPA', placement: '95%', package: '₹19-24 LPA' },
            { name: 'BCA', fee: '₹2.5 LPA', placement: '92%', package: '₹11-15 LPA' },
            { name: 'MCA', fee: '₹2.8 LPA', placement: '93%', package: '₹12-16 LPA' }
        ],
        hostel: {
            single: '₹98,000/year',
            double: '₹80,000/year',
            triple: '₹65,000/year'
        },
        placement: '95%+',
        ranking: 'Top Private Engineering',
        city: 'Vellore, Tamil Nadu'
    },
    'Symbiosis': {
        fullName: 'Symbiosis International University',
        courses: [
            { name: 'BA LLB (5 years)', fee: '₹3.5 LPA', placement: '88%', package: 'Case-based' },
            { name: 'BBA LLB', fee: '₹3.8 LPA', placement: '90%', package: 'Variable' },
            { name: 'MBA', fee: '₹3.5 LPA', placement: '92%', package: '₹15-20 LPA' },
            { name: 'B.Tech CSE', fee: '₹4 LPA', placement: '91%', package: '₹18-22 LPA' }
        ],
        hostel: {
            single: '₹96,000/year',
            double: '₹78,000/year',
            triple: '₹63,000/year'
        },
        placement: '90%+',
        ranking: 'Top Private University',
        city: 'Pune, Maharashtra'
    },
    'FLAME': {
        fullName: 'FLAME University',
        courses: [
            { name: 'BBA (3 years)', fee: '₹3.2 LPA', placement: '88%', package: '₹12-16 LPA' },
            { name: 'BBA + MBA (5 years)', fee: '₹3.5 LPA', placement: '90%', package: '₹14-18 LPA' },
            { name: 'B.Com', fee: '₹2.8 LPA', placement: '85%', package: '₹10-14 LPA' },
            { name: 'MBA', fee: '₹3.2 LPA', placement: '89%', package: '₹13-17 LPA' }
        ],
        hostel: {
            single: '₹88,000/year',
            double: '₹71,000/year',
            triple: '₹57,000/year'
        },
        placement: '88%+',
        ranking: 'Top Private Management',
        city: 'Pune, Maharashtra'
    },
    'Symbiosis Law': {
        fullName: 'Symbiosis Law School (SLS)',
        courses: [
            { name: 'BA LLB (5 years)', fee: '₹3.8 LPA', placement: '91%', package: 'Case-based' },
            { name: 'BBA LLB (5 years)', fee: '₹4 LPA', placement: '92%', package: 'Variable' },
            { name: 'LLM (Masters)', fee: '₹2 LPA', placement: '88%', package: '₹8-12 LPA' },
            { name: 'Integrated MBA + LLB', fee: '₹4.5 LPA', placement: '93%', package: '₹14-18 LPA' }
        ],
        hostel: {
            single: '₹99,000/year',
            double: '₹81,000/year',
            triple: '₹65,000/year'
        },
        placement: '91%+',
        ranking: 'Top Law School in India',
        city: 'Pune, Maharashtra'
    },
    'IIMT University': {
        fullName: 'IIMT University',
        courses: [
            { name: 'B.Tech CSE', fee: '₹3.3 LPA', placement: '88%', package: '₹14-18 LPA' },
            { name: 'BA LLB (5 years)', fee: '₹3.2 LPA', placement: '86%', package: 'Case-based' },
            { name: 'BBA', fee: '₹2.5 LPA', placement: '84%', package: '₹9-12 LPA' },
            { name: 'BCA', fee: '₹2.2 LPA', placement: '82%', package: '₹7-10 LPA' },
            { name: 'MCA', fee: '₹2.4 LPA', placement: '85%', package: '₹9-12 LPA' },
            { name: 'BBA LLB', fee: '₹3.5 LPA', placement: '87%', package: 'Variable' }
        ],
        hostel: {
            single: '₹84,000/year',
            double: '₹68,000/year',
            triple: '₹54,000/year'
        },
        placement: '85%+',
        ranking: 'Private Engineering & Law',
        city: 'Meerut & Greater Noida, UP'
    }
};

// Show University Details Modal
function showDetails(collegeName) {
    const details = universityDetails[collegeName] || {
        fullName: collegeName,
        courses: [{ name: 'Multiple Courses', fee: 'Contact for details', placement: 'Good', package: 'Competitive' }],
        hostel: { single: 'Contact for details', double: 'Contact for details', triple: 'Contact for details' },
        placement: 'Good',
        ranking: 'Top College',
        city: 'India'
    };

    let coursesHTML = '';
    if (Array.isArray(details.courses)) {
        coursesHTML = details.courses.map(c => `
            <div class="course-item">
                <div style="font-weight: 600; color: #333; margin-bottom: 5px;">${c.name}</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.9em;">
                    <div><strong>Annual Fee:</strong> <span style="color: #764ba2; font-weight: 600;">${c.fee}</span></div>
                    <div><strong>Placement:</strong> ${c.placement}</div>
                </div>
                <div style="color: #667eea; font-weight: 600; margin-top: 5px;">💼 Package: ${c.package}</div>
            </div>
        `).join('');
    }

    const hostelHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 10px;">
            <div style="background: #f5f5f5; padding: 12px; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.85em; color: #666; margin-bottom: 5px;">🛏️ Single Room</div>
                <div style="color: #764ba2; font-weight: 600; font-size: 1.15em;">${details.hostel.single}</div>
            </div>
            <div style="background: #f5f5f5; padding: 12px; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.85em; color: #666; margin-bottom: 5px;">🛏️🛏️ Double Room</div>
                <div style="color: #764ba2; font-weight: 600; font-size: 1.15em;">${details.hostel.double}</div>
            </div>
            <div style="background: #f5f5f5; padding: 12px; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.85em; color: #666; margin-bottom: 5px;">🛏️🛏️🛏️ Triple Room</div>
                <div style="color: #764ba2; font-weight: 600; font-size: 1.15em;">${details.hostel.triple}</div>
            </div>
        </div>
    `;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-details">
            <h2>${details.fullName}</h2>
            <p style="color: #666; margin-bottom: 20px;">📍 ${details.city}</p>
            
            <div class="details-section">
                <h3>📚 Courses & Fees</h3>
                ${coursesHTML}
            </div>

            <div class="details-section">
                <h3>🏨 Hostel / Accommodation Fees (Per Year)</h3>
                ${hostelHTML}
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div class="details-section" style="margin-bottom: 0;">
                    <h3>🎯 Placement Rate</h3>
                    <p><strong style="color: #28a745; font-size: 1.2em;">${details.placement}</strong></p>
                </div>
                
                <div class="details-section" style="margin-bottom: 0;">
                    <h3>⭐ Ranking</h3>
                    <p>${details.ranking}</p>
                </div>
            </div>
            
            <div style="margin-top: 25px; padding-top: 20px; border-top: 2px solid #e0e0e0;">
                <button class="submit-btn" onclick="selectCollegeFromModal('${collegeName}')">
                    Select This College
                </button>
            </div>
        </div>
    `;

    document.getElementById('detailsModal').classList.remove('hidden');
}

function closeDetails() {
    document.getElementById('detailsModal').classList.add('hidden');
}

function selectCollegeFromModal(collegeName) {
    document.getElementById('university').value = collegeName;
    closeDetails();
    
    document.querySelector('.message-form').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Filter Colleges Function
function filterColleges(state) {
    const cards = document.querySelectorAll('.university-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    cards.forEach(card => {
        if (state === 'all') {
            card.classList.remove('hidden');
        } else {
            const cardStates = card.getAttribute('data-state').split(' ');
            if (cardStates.includes(state)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

// Form Submission - Send to local server
if (document.getElementById('messageForm')) {
    document.getElementById('messageForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const university = document.getElementById('university').value;
        const message = document.getElementById('message').value;
        
        const formStatus = document.getElementById('formStatus');
        formStatus.innerHTML = '⏳ Sending your inquiry... Please wait.';
        formStatus.className = 'form-status';

        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, university, message })
            });

            const result = await response.json();

            if (response.ok) {
                formStatus.innerHTML = `✅ <strong>Success!</strong> ${result.message || 'Your inquiry has been sent. You will receive a confirmation email.'}`;
                formStatus.classList.add('success');
                
                document.getElementById('messageForm').reset();
                document.getElementById('university').value = '';
            } else {
                throw new Error(result.error || 'An unknown error occurred.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            formStatus.innerHTML = `❌ <strong>Error!</strong> Failed to submit your inquiry. Please try again later.`;
            formStatus.classList.add('error');
        }

        setTimeout(() => {
            formStatus.innerHTML = '';
            formStatus.classList.remove('success', 'error');
        }, 8000);
    });
}


document.addEventListener('click', function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        closeDetails();
    }
});



window.addEventListener('load', () => {

    console.log('✅ Private College Portal Loaded!');

});



function searchUniversities() {

    let input = document.getElementById('searchInput');

    let filter = input.value.toUpperCase();

    let cards = document.querySelectorAll('.university-card');



    cards.forEach(card => {

        let h3 = card.querySelector('h3');

        if (h3.innerText.toUpperCase().indexOf(filter) > -1) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}
