var people={

    teacher : [
       {name :'Solo', firstname : 'Han' },
       {name :'Bacca', firstname : 'Chew' }
   ],
   
    student : [
       {name :'McFly', firstname : 'Marty' },
       {name :'Brown', firstname : 'Doc' }
   ]
   
   };

console.log(people['student'][0]['firstname']);
console.log(people.student[0].firstname);
