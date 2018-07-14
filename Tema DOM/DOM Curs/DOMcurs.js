var sortingDirection;
var currentSortingColumn;
var clientsList=[
    {
        nume: "Negrescu",
        prenume: "Cornelia",
        varsta: 67,
        telefon: ["0745654925"],
        initialOrder: 1
    },
    {
        nume: "Grigorescu",
        prenume: "Gabriel",
        varsta: 42,
        telefon: ["0748965744"],
        initialOrder: 2
    },
    {
        nume: "Lupei",
        prenume: "Liana",
        varsta: 26,
        telefon: ["0736558798"],
        initialOrder: 3
    },
    {
        nume: "Dumitru",
        prenume: "Angela",
        varsta: 15,
        telefon: ["0754664852"],
        initialOrder: 4
    },
    {
        nume: "Antonescu",
        prenume: "Daniela",
        varsta: 32,
        telefon: ["0744214522"],
        initialOrder: 5
    },
    {
        nume: "Popescu",
        prenume: "Iulian",
        varsta: 25,
        telefon: ["0745711233"],
        initialOrder: 6
    },
    {
        nume: "Dumitru",
        prenume: "Bogdana",
        varsta: 39,
        telefon: ["0745114544"],
        initialOrder: 7
    },
    {
        nume: "Constantin",
        prenume: "Iuliu",
        varsta: 77,
        telefon: ["0733987789"],
        initialOrder: 8
    },
    {
        nume: "Petran",
        prenume: "Viorel",
        varsta: 46,
        telefon: ["0745985211"],
        initialOrder: 9
    },
    {
        nume: "Vasile",
        prenume: "Veronica",
        varsta: 40,
        telefon: ["0745647512"],
        initialOrder: 10
    }
];

function displayTable (list) {
    var body=document.querySelector("table tbody");
    var generatedBody="";
    for (let i=0; i<list.length; ++i) {
        generatedBody+=`
            <tr>
                <td class="sortable nume">${list[i].nume}</td>
                <td class="sortable prenume">${list[i].prenume}</td>
                <td class="sortable varsta">${list[i].varsta}</td>
                <td>${list[i].telefon}</td>
            </tr>
        `;
    }
    body.innerHTML=generatedBody;
}

function doSortingBy (column) {
    sortingDirection=getNextSortingDirection(column);
    if(sortingDirection==undefined) column='initialOrder';
    clientsList.sort(function(a,b) {
        if(sortingDirection=='descendent') {
            if(a[column]>b[column]) return -1;
            if(a[column]<b[column]) return 1;
            if(a[column]==b[column]) return 0;
        }
        else {
            if(a[column]>b[column]) return 1;
            if(a[column]<b[column]) return -1;
            if(a[column]==b[column]) return 0;
        }
    })
}

function getNextSortingDirection (column) {
    if(currentSortingColumn!=column) {
        sortingDirection=undefined;
        currentSortingColumn=column;
    }
    if(sortingDirection==undefined) return 'ascendent';
    if(sortingDirection=='ascendent')return 'descendent';
    if(sortingDirection=='descendent') return undefined;
}

function applySortingColors(column) {
    let columnElementsToDeleteColors=document.querySelectorAll('.sortable');
    for(let i=0; i<columnElementsToDeleteColors.length; ++i) {
        columnElementsToDeleteColors[i].classList.remove('ascendent');
        columnElementsToDeleteColors[i].classList.remove('descendent');
    }
    let columnElementsToApplyColumn=document.querySelectorAll(`.${column}`);
    for (let i=0; i<columnElementsToApplyColumn.length; ++i) {
        columnElementsToApplyColumn[i].classList.add(sortingDirection);
    }
}