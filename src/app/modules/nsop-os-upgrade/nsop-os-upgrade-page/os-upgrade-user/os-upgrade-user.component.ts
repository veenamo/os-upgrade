import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  hostName: string;
  projectName: string;
  currentOsVersion: string;
  nextOsVersion: string;
  vendor: string;
  region: string;
  location: string;
  status: {
    validationChecks: number;
    createChange: number;
    initiatingUpgrade: number;
    finishedUpgrade: number;
  };
}

@Component({
  selector: 'app-os-upgrade-user',
  templateUrl: './os-upgrade-user.component.html',
  styleUrls: ['./os-upgrade-user.component.css'],
})
export class OsUpgradeUserComponent implements OnInit {
  @ViewChild('mymodalParent') maintable: MatTable<PeriodicElement>;
  @ViewChild('mymodalChild') childtable: MatTable<PeriodicElement>;
  @ViewChild('mymodal')
  dialogRef!: TemplateRef<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private modalService: NgbModal, public dialog: MatDialog) {}

  closeResult: string = '';
  toggle = true;
  dataSource: object[] = [];
  dataPopUpAdd: object[] = [];
  displayedPopUpColumns: string[] = [
    'popUpProjectName',
    'popUpHostName',
    'popUpCurrentOsVersion',
    'popUpNextOsVersion',
    'popUpRegion',
    'popUpLocation',
    'popUpoperations',
  ];
  displayedColumns: string[] = [
    'projectName',

    'deviceType',
    'deviceCount',
    'projectStatus',
    'operations',
    'lastUpdateOn',
  ];

  platformList: string[] = ['a', 'b', 'c', 'e', 'f', 'g', 'h'];
  vendorList: string[] = ['a', 'b', 'c', 'e', 'f', 'g', 'h'];
  currentOsVersionList: string[] = [
    'V1.0',
    'V1.1',
    'V1.2',
    'V1.3',
    'V1.4',
    'V1.5',
    'V1.7',
  ];
  nextOsVersionList: string[] = [
    'V2.0',
    'V2.1',
    'V2.2',
    'V2.3',
    'V2.4',
    'V2.5',
    'V2.7',
  ];
  locationList: string[] = ['a', 'b', 'c', 'e', 'f', 'g', 'h'];
  regionList: string[] = ['a', 'b', 'c', 'e', 'f', 'g', 'h'];

  length: number = 0;
  resultsLength: number = 0;

  //dataToDisplay = [];
  dataToDisplay = [
    {
      projectName: 'v 1',
      hostName: 'MX400 router',
      operations: 'edit',
      details: 'H',
      currentOsVersion: 'V1.0',
      nextOsVersion: 'V2.0',
      vendor: '44',
      region: 'b',
      location: 'a',
      deviceType: 'MX',
      deviceCount: 10,
      status: {
        validationChecks: 1,
        createChange: 1,
        initiatingUpgrade: 0,
        finishedUpgrade: 0,
      },
    },
    {
      projectName: 'v 2',
      deviceType: 'MX',
      hostName: 'MX400 router',
      deviceCount: 10,
      operations: 'edit',
      details: 'Hecc',
      currentOsVersion: 'V1.0',
      nextOsVersion: 'V2.0',
      vendor: '44',
      region: 'a',
      location: 'b',
      status: {
        validationChecks: 2,
        createChange: 0,
        initiatingUpgrade: 0,
        finishedUpgrade: 0,
      },
    },
    {
      projectName: 'v 3',
      hostName: 'MX400 router',
      deviceType: 'MX',
      deviceCount: 10,
      operations: 'edit',
      details: 'Licc',
      currentOsVersion: 'V1.0',
      nextOsVersion: 'V2.0',
      vendor: 'd',
      region: 'd',
      location: 'c',
      status: {
        validationChecks: 1,
        createChange: 0,
        initiatingUpgrade: 0,
        finishedUpgrade: 0,
      },
    },
    {
      projectName: 'v 4',
      deviceType: 'MX',
      hostName: 'MX400 router',
      operations: 'edit',
      details: 'Be',
      currentOsVersion: 'V1.0',
      nextOsVersion: 'V2.0',
      vendor: 'c',
      region: '5gb',
      location: '6gb',
      deviceCount: 10,
      status: {
        validationChecks: 1,
        createChange: 0,
        initiatingUpgrade: 0,
        finishedUpgrade: 0,
      },
    },
    {
      projectName: 'v 5',
      hostName: 'MX400 router',
      deviceType: 'MX',
      operations: 'edit',
      details: 'B',
      deviceCount: 10,
      currentOsVersion: 'V1.0',
      nextOsVersion: 'V2.0',
      vendor: 'b',
      region: 'e',
      location: 'a',
      status: {
        validationChecks: 1,
        createChange: 1,
        initiatingUpgrade: 1,
        finishedUpgrade: 2,
      },
    },
    {
      projectName: 'v 6',
      hostName: 'MX400 router',
      deviceType: 'MX',
      operations: 'edit',
      details: 'C',
      currentOsVersion: 'V1.0',
      nextOsVersion: 'V2.0',
      vendor: 'a',
      region: 'a',
      location: 'b',
      deviceCount: 10,
      status: {
        validationChecks: 1,
        createChange: 0,
        initiatingUpgrade: 0,
        finishedUpgrade: 0,
      },
    },
    {
      projectName: 'v 7',
      hostName: 'MX400 router',
      operations: 'edit',
      deviceType: 'MX',
      details:
        ' dvcgsdfvhjbdshfvdbsfvhbfvshbfvsdhfvbsdfvhsdfbvhdhfhbvsdfvbsdfhbdshf dvcgsdfvhjbdshfvdbsfvhbfvshbfvsdhfvbsdfvhsdfbvhdhfhbvsdfvbsdfhbdshf dvcgsdfvhjbdshfvdbsfvhbfvshbfvsdhfvbsdfvhsdfbvhdhfhbvsdfvbsdfhbdshf',
      currentOsVersion: '23',
      nextOsVersion: '44',
      vendor: '44',
      region: '5gb',
      deviceCount: 10,
      location: '6gb',
      status: {
        validationChecks: 1,
        createChange: 0,
        initiatingUpgrade: 0,
        finishedUpgrade: 0,
      },
    },
    {
      projectName: 'v 8',
      hostName: 'MX400 router',
      deviceType: 'MX',
      operations: 'edit',
      deviceCount: 10,
      details: 'O',
      currentOsVersion: '23',
      nextOsVersion: '44',
      vendor: '44',
      region: '5gb',
      location: '6gb',
      status: {
        validationChecks: 1,
        createChange: 0,
        initiatingUpgrade: 0,
        finishedUpgrade: 0,
      },
    },
    {
      projectName: 'v 9',

      hostName: 'MX400 router',
      operations: 'edit',
      details: 'F',
      deviceCount: 10,
      currentOsVersion: '23',
      nextOsVersion: '44',
      vendor: '44',
      region: '5gb',
      deviceType: 'MX',
      location: '6gb',
      status: {
        validationChecks: 1,
        createChange: 0,
        initiatingUpgrade: 0,
        finishedUpgrade: 0,
      },
    },
    {
      projectName: 'v 10',
      hostName: 'MX400 router',
      deviceType: 'MX',
      operations: 'edit',
      details: 'Ne',
      currentOsVersion: '23',
      deviceCount: 10,
      nextOsVersion: '44',
      vendor: '44',
      region: '5gb',
      location: '6gb',
      status: {
        validationChecks: 1,
        createChange: 0,
        initiatingUpgrade: 0,
        finishedUpgrade: 0,
      },
    },
  ];
  form = new FormGroup({
    projectName: new FormControl('', Validators.required),
    hostName: new FormControl('', Validators.required),
    currentOsVersion: new FormControl(new Date(), Validators.required),
    nextOsVersion: new FormControl(new Date(), Validators.required),
    vendor: new FormControl(new Date(), Validators.required),
    region: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),

    status: new FormGroup({
      validationChecks: new FormControl(0),
      createChange: new FormControl(0),
      initiatingUpgrade: new FormControl(0),
      finishedUpgrade: new FormControl(0),
    }),
  });

  @ViewChild('mymodalChild', { static: false, read: ElementRef }) inRef;
  // @ViewChild('mymodalParent', { static: false, read: ElementRef }) ;

  addOsTemporarily() {
    console.log(this.form);
    this.dataPopUpAdd = [this.form.value, ...this.dataPopUpAdd];
    this.length = this.dataPopUpAdd.length;
    this.form.reset();
  }

  addData() {
    this.toggle = false;

    const dialogRef = this.dialog.open(this.dialogRef, {
      width: '850px',
      height: '500px',
      data: { name: 'this.name', animal: 'this.animal' },
    });
    this.form.reset();
  }

  osUpgradeUserEdit(action, ele) {
    this.form.setValue({
      projectName: ele.projectName,
      hostName: ele.hostName,
      currentOsVersion: ele.currentOsVersion,
      nextOsVersion: ele.nextOsVersion,
      vendor: ele.vendor,
      region: ele.region,
      location: ele.location,
    });

    this.toggle = false;

    const dialogRef = this.dialog.open(this.dialogRef, {
      width: '850px',
      height: '500px',
      data: { name: 'this.name', animal: 'this.animal' },
    });
  }

  osUpgradeUserRemove(action, i, mymodalParent) {
    let choice = confirm('Are you sure you want to delete?');
    if (i > -1) {
      this.dataSource.splice(i, 1);
      mymodalParent.renderRows();
    }
  }

  osUpgradeUserInitiateChecks(action, i, mymodalParent) {}

  osUpgradeUserCreateChange(action, i, mymodalParent) {}

  osUpgradePause(action, i, mymodalParent) {}

  popUpRemove(action: string, index: number, mymodalChild) {
    let choice = confirm('Are you sure you want to delete?');

    if (index > -1) {
      this.dataPopUpAdd.splice(index, 1);
      mymodalChild.renderRows();
    }
  }

  popUpEdit(action: string, ele) {
    this.form.setValue({
      projectName: ele.projectName,
      hostName: ele.hostName,
      currentOsVersion: ele.currentOsVersion,
      nextOsVersion: ele.nextOsVersion,
      vendor: ele.vendor,
      region: ele.region,
      location: ele.location,
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.toggle = true;
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.toggle = true;
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  submit() {
    console.log('this.dataPopUpAdd', this.dataPopUpAdd);
    this.dataSource = [...this.dataPopUpAdd, ...this.dataSource];

    this.dialog.closeAll();
    this.dataPopUpAdd = [];
  }

  ngOnInit(): void {
    this.dataSource = this.dataToDisplay;
    this.resultsLength = this.dataToDisplay.length;
  }
}
