let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');


const allCardSections = document.querySelectorAll('.allCards');
const mainContainer = document.querySelector('main')


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


 function calculateCount(){
    total.innerText = allCardSections.length
    interviewCount.innerText = interviewList.length 
    rejectedCount.innerText = rejectedList.length

 }

calculateCount()


window.addEventListener('DOMContentLoaded', function() {
   const jobsCountElem = document.querySelector('main > div.flex.justify-between > p');
   const notAvailableSection = document.getElementById('not-available');
   if (notAvailableSection) notAvailableSection.style.display = 'none';
   const allCards = document.querySelectorAll('.allCards');
   for (let i = 0; i < allCards.length; i++) {
      const section = allCards[i];
      const interviewBtn = section.querySelector('.interview-btn');
      const rejectBtn = section.querySelector('.reject-btn');
      const binImg = section.querySelector('img[src$="bin.png"]');
      if (binImg) {
         binImg.style.cursor = 'pointer';
         binImg.addEventListener('click', function() {
            section.remove();
            updateCounts();
            updateJobsCount();
            updateNotAvailable();
         });
      }
      interviewBtn.addEventListener('click', function() {
         interviewBtn.classList.add('bg-green-600', 'text-white');
         interviewBtn.classList.remove('text-green-600');
         rejectBtn.classList.remove('bg-red-600', 'text-white');
         rejectBtn.classList.add('text-red-500');
         const statusP = Array.from(section.querySelectorAll('p')).find(p => p.textContent.trim() === 'Not Applied' || p.textContent.trim() === 'Rejected' || p.textContent.trim() === 'Interview');
         if (statusP) statusP.textContent = 'Interview';
         const selected = document.querySelector('.bg-blue-500.text-white');
         if (selected && selected.id !== 'all-filter-btn') {
            toggleStyle(selected.id);
         } else {
            toggleStyle('all-filter-btn');
         }
         updateCounts();
         updateNotAvailable();
      });
      rejectBtn.addEventListener('click', function() {
         rejectBtn.classList.add('bg-red-600', 'text-white');
         rejectBtn.classList.remove('text-red-500');
         interviewBtn.classList.remove('bg-green-600', 'text-white');
         interviewBtn.classList.add('text-green-600');
         const statusP = Array.from(section.querySelectorAll('p')).find(p => p.textContent.trim() === 'Not Applied' || p.textContent.trim() === 'Interview' || p.textContent.trim() === 'Rejected');
         if (statusP) statusP.textContent = 'Rejected';
         const selected = document.querySelector('.bg-blue-500.text-white');
         if (selected && selected.id !== 'all-filter-btn') {
            toggleStyle(selected.id);
         } else {
            toggleStyle('all-filter-btn');
         }
         updateCounts();
         updateNotAvailable();
      });
   }
   function updateCounts() {
      const allCards = document.querySelectorAll('.allCards');
      let interview = 0;
      let rejected = 0;
      for (let i = 0; i < allCards.length; i++) {
         const section = allCards[i];
         const interviewBtn = section.querySelector('.interview-btn');
         const rejectBtn = section.querySelector('.reject-btn');
         const isInterview = interviewBtn.classList.contains('bg-green-600');
         const isRejected = rejectBtn.classList.contains('bg-red-600');
         if (isInterview) interview++;
         if (isRejected) rejected++;
      }
      total.innerText = allCards.length;
      interviewCount.innerText = interview;
      rejectedCount.innerText = rejected;
   }
   function updateJobsCount() {
      const allCards = document.querySelectorAll('.allCards');
      if (jobsCountElem) {
         jobsCountElem.textContent = allCards.length + ' jobs';
      }
   }
   function updateNotAvailable() {
      const allCards = document.querySelectorAll('.allCards');
      let interview = 0;
      let rejected = 0;
      for (let i = 0; i < allCards.length; i++) {
         const section = allCards[i];
         const interviewBtn = section.querySelector('.interview-btn');
         const rejectBtn = section.querySelector('.reject-btn');
         if (interviewBtn.classList.contains('bg-green-600')) interview++;
         if (rejectBtn.classList.contains('bg-red-600')) rejected++;
      }
      const selected = document.querySelector('.bg-blue-500.text-white');
      if (!notAvailableSection) return;
      if (selected && selected.id === 'interview-filter-btn' && interview === 0) {
         notAvailableSection.style.display = '';
      } else if (selected && selected.id === 'rejected-filter-btn' && rejected === 0) {
         notAvailableSection.style.display = '';
      } else {
         notAvailableSection.style.display = 'none';
      }
   }
   if (jobsCountElem) {
      jobsCountElem.textContent = allCards.length + ' jobs';
   }
   updateNotAvailable();
});

function toggleStyle(id) {
   allFilterBtn.classList.remove('bg-blue-500', 'text-white');
   interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
   rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

   const selected = document.getElementById(id);
   selected.classList.add('bg-blue-500', 'text-white');

   const allCards = document.querySelectorAll('.allCards');
   let interview = 0;
   let rejected = 0;
   for (let i = 0; i < allCards.length; i++) {
      const section = allCards[i];
      const interviewBtn = section.querySelector('.interview-btn');
      const rejectBtn = section.querySelector('.reject-btn');
      const isInterview = interviewBtn.classList.contains('bg-green-600');
      const isRejected = rejectBtn.classList.contains('bg-red-600');

      if (id === 'all-filter-btn') {
         section.style.display = '';
      } else if (id === 'interview-filter-btn') {
         if (isInterview) {
            section.style.display = '';
         } else {
            section.style.display = 'none';
         }
      } else if (id === 'rejected-filter-btn') {
         if (isRejected) {
            section.style.display = '';
         } else {
            section.style.display = 'none';
         }
      }

      if (isInterview) interview++;
      if (isRejected) rejected++;
   }

   total.innerText = allCards.length;
   interviewCount.innerText = interview;
   rejectedCount.innerText = rejected;

   // Show/hide not-available section dynamically
   const notAvailableSection = document.getElementById('not-available');
   if (notAvailableSection) {
      if (id === 'interview-filter-btn' && interview === 0) {
         notAvailableSection.style.display = '';
      } else if (id === 'rejected-filter-btn' && rejected === 0) {
         notAvailableSection.style.display = '';
      } else {
         notAvailableSection.style.display = 'none';
      }
   }
}

