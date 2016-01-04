/**
 * Created by heilmann on 29/12/2015.
 */
var someRows = [
    {
        invdate1: "2007-10-01",
        invdate2: "2012-10-01",
        name: "test",
        note: "note",
        amount: "200.00",
        tax: "10.00",
        closed: true,
        ship_via: "TN",
        total: "210.00"
    },
    {
        invdate1: "2007-10-02",
        invdate2: "2012-10-02",
        name: "test2",
        note: "note2",
        amount: "300.00",
        tax: "20.00",
        closed: false,
        ship_via: "FE",
        total: "320.00"
    },
    {
        invdate1: "2007-09-01",
        invdate2: "2012-09-01",
        name: "test3",
        note: "note3",
        amount: "400.00",
        tax: "30.00",
        closed: false,
        ship_via: "FE",
        total: "430.00"
    },
    {
        invdate1: "2007-10-04",
        invdate2: "2012-10-04",
        name: "test4",
        note: "note4",
        amount: "200.00",
        tax: "10.00",
        closed: true,
        ship_via: "TN",
        total: "210.00"
    },
    {
        invdate1: "2007-10-31",
        invdate2: "2012-10-31",
        name: "test5",
        note: "note5",
        amount: "300.00",
        tax: "20.00",
        closed: false,
        ship_via: "FE",
        total: "320.00"
    },
    {
        invdate1: "2007-09-06",
        invdate2: "2012-09-06",
        name: "test6",
        note: "note6",
        amount: "400.00",
        tax: "30.00",
        closed: false,
        ship_via: "FE",
        total: "430.00"
    },
    {
        invdate1: "2007-10-04",
        invdate2: "2012-10-04",
        name: "test7",
        note: "note7",
        amount: "200.00",
        tax: "10.00",
        closed: true,
        ship_via: "TN",
        total: "210.00"
    },
    {
        invdate1: "2007-10-03",
        invdate2: "2012-10-03",
        name: "test8",
        note: "note8",
        amount: "300.00",
        tax: "20.00",
        closed: false,
        ship_via: "FE",
        total: "320.00"
    },
    {
        invdate1: "2007-09-01",
        invdate2: "2012-09-01",
        name: "test9",
        note: "note9",
        amount: "400.00",
        tax: "30.00",
        closed: false,
        ship_via: "TN",
        total: "430.00"
    },
    {
        invdate1: "2007-09-08",
        invdate2: "2012-09-08",
        name: "test10",
        note: "note10",
        amount: "500.00",
        tax: "30.00",
        closed: true,
        ship_via: "TN",
        total: "530.00"
    },
    {
        invdate1: "2007-09-08",
        invdate2: "2012-09-08",
        name: "test11",
        note: "note11",
        amount: "500.00",
        tax: "30.00",
        closed: false,
        ship_via: "FE",
        total: "530.00"
    },
    {
        invdate1: "2007-09-10",
        invdate2: "2012-09-10",
        name: "test12",
        note: "note12",
        amount: "500.00",
        tax: "30.00",
        closed: false,
        ship_via: "FE",
        total: "530.00"
    }
];

function getOneRow() {
    return someRows[0];
}

function fetchData() {
    var arr = repeatArray(10, someRows);
    for(i=0; i<arr.length; ++i) {
        arr[i].id = i;
    }
    return arr;
}

function getColModel() {
   return [
        {name: 'actions', width: 56, formatter: "actions", formatoptions: {keys: true}},
        {name: 'name', index: 'name', editable: true, width: 65, editrules: {required: true}},
        {
            name: 'invdate1', index: 'invdate1', width: 80, align: 'center', sorttype: 'date',
            formatter: 'date', formatoptions: {newformat: 'd-M-Y'}, editable: true, datefmt: 'd-M-Y',
            editoptions: {dataInit: initDateEdit},
            searchoptions: {sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge'], dataInit: initDateSearch}
        },
        {
            name: 'invdate2', index: 'invdate2', width: 80, align: 'center', sorttype: 'date',
            formatter: 'date', formatoptions: {newformat: 'd-M-Y'}, editable: true, datefmt: 'd-M-Y',
            editoptions: {dataInit: initDateEdit},
            searchoptions: {sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge'], dataInit: initDateSearch}
        },
        {
            name: 'note', index: 'note', width: 60, sortable: false, editable: true, edittype: 'textarea',
            editoptions: {rows: 5}
        },
        {name: 'amount', index: 'amount', width: 75, template: numberTemplate},
        {name: 'tax', index: 'tax', width: 46, template: numberTemplate},
        {name: 'total', index: 'total', width: 57, template: numberTemplate},
        {
            name: 'closed', index: 'closed', width: 65, align: 'center', editable: true,
            formatter: 'checkbox', title: false,
            edittype: 'checkbox', editoptions: {value: 'Yes:No', defaultValue: 'Yes'},
            stype: 'select', searchoptions: {sopt: ['eq', 'ne'], value: ':Any;true:Yes;false:No'}
        },
        {
            name: 'ship_via',
            index: 'ship_via',
            width: 95,
            align: 'center',
            editable: true,
            formatter: 'select',
            edittype: 'select',
            editoptions: {value: 'FE:FedEx;TN:TNT;IN:Intim', defaultValue: 'IN'},
            stype: 'select',
            searchoptions: {sopt: ['eq', 'ne'], value: ':Any;FE:FedEx;TN:TNT;IN:IN'}
        }
    ];
}

function getColNames() {
    return ['', 'Client', 'Date1', 'Date2', 'Notes', 'Amount', 'Tax', 'Total', 'Closed', 'Shipped via'];
}