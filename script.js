let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// console.log('interviewCount element:', interviewCount);
// console.log('rejectedCount element:', rejectedCount);

const allCardSections = document.querySelectorAll('.allCards');
const mainContainer = document.querySelector('main')
// console.log(mainContainer);

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

// allFilterBtn.addEventListener('click', function(){
//     console.log("click all");
// });

// interviewFilterBtn.addEventListener('click', function(){
//     console.log("click interview");
// });

// rejectedFilterBtn.addEventListener('click', function(){
//     console.log("click rejected");
// });

// interviewList.push({name:'employee 1'},{name:'employee 2'})

 function calculateCount(){
    total.innerText = allCardSections.length
    interviewCount.innerText = interviewList.length 
    rejectedCount.innerText = rejectedList.length

 }
 calculateCount()

 function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500','text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')

    const selected = document.getElementById(id)
    selected.classList.add('bg-blue-500', 'text-white')
    // allFilterBtn.classList.add('bg-gray-300',   'text-blue-500')
    // interviewFilterBtn.classList.add('bg-blue-500', 'text-white')
    // rejectedFilterBtn.classList.add('bg-blue-500', 'text-white')

    // console.log(id);

     
     console.log(selected);

    // selected,classList.remove('bg-gray-300', 'text-blue-300')
    // selected.classList.add('bg-blue-500','text-white')
 }

