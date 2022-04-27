import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os-upgrade',
  templateUrl: './os-upgrade.component.html',
  styleUrls: ['./os-upgrade.component.css'],
})
export class OsUpgradeComponent implements OnInit {
  constructor() {}

  toggle = true;
  dataSource: object[] = [];
  displayedColumns: string[] = [
    'osVersion',
    'platformName',
    'operations',
    'details',
  ];
  dataToDisplay = [
    {
      osVersion: 'v 1',
      platformName: 'MX400 router',
      operations: 'edit',
      details: 'H',
    },
    {
      osVersion: 'v 2',
      platformName: 'MX400 router',
      operations: 'edit',
      details: 'Hecc',
    },
    {
      osVersion: 'v 3',
      platformName: 'MX400 router',
      operations: 'edit',
      details: 'Licc',
    },
    {
      osVersion: 'v 4',
      platformName: 'MX400 router',
      operations: 'edit',
      details: 'Be',
    },
    {
      osVersion: 'v 5',
      platformName: 'MX400 router',
      operations: 'edit',
      details: 'B',
    },
    {
      osVersion: 'v 6',
      platformName: 'MX400 router',
      operations: 'edit',
      details: 'C',
    },
    {
      osVersion: 'v 7',
      platformName: 'MX400 router',
      operations: 'edit',
      details: 'N',
    },
    {
      osVersion: 'v 8',
      platformName: 'MX400 router',
      operations: 'edit',
      details: 'O',
    },
    {
      osVersion: 'v 9',
      platformName: 'MX400 router',
      operations: 'edit',
      details: 'F',
    },
    {
      osVersion: 'v 10',
      platformName: 'MX400 router',
      operations: 'edit',
      details: 'Ne',
    },
  ];

  addData() {
    this.toggle = !this.toggle;
    //this.status = this.toggle ? 'Enable' : 'Disable';
  }
  ngOnInit(): void {
    this.dataSource = this.dataToDisplay;
  }
}
