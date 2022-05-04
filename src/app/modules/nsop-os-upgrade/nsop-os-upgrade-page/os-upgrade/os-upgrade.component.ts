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
  platform: string;
  osVersion: string;
  endOfLife: string;
  endOfSupport: string;
  endOfSale: string;
  minCpu: string;
  minRam: string;
  minDiskSpace: string;
}

@Component({
  selector: 'app-os-upgrade',
  templateUrl: './os-upgrade.component.html',
  styleUrls: ['./os-upgrade.component.css'],
})
export class OsUpgradeComponent implements OnInit {
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
    'popUposVersion',
    'popUpEndofLife',
    'popUpEndofSupport',
    'popUpEndofSale',
    'popUpMinCpu',
    'popUpMinRam',
    'popUpMinSpace',
    'popUpoperations',
  ];
  displayedColumns: string[] = [
    'osVersion',
    'platform',
    'operations',
    'details',
  ];

  platformList: string[] = ['a', 'b', 'c', 'e', 'f', 'g', 'h'];
  length: number = 0;
  resultsLength: number = 0;

  dataToDisplay = [];
  // dataToDisplay = [
  //   {
  //     osVersion: 'v 1',
  //     platform: 'MX400 router',
  //     operations: 'edit',
  //     details: 'H',
  //     endOfLife: '23',
  //     endOfSupport: '44',
  //     endOfSale: '44',
  //     minCpu: '5gb',
  //     minRam: '6gb',
  //     minDiskSpace: '7gb',
  //   },
  //   {
  //     osVersion: 'v 2',
  //     platform: 'MX400 router',
  //     operations: 'edit',
  //     details: 'Hecc',
  //     endOfLife: '23',
  //     endOfSupport: '44',
  //     endOfSale: '44',
  //     minCpu: '5gb',
  //     minRam: '6gb',
  //     minDiskSpace: '7gb',
  //   },
  //   {
  //     osVersion: 'v 3',
  //     platform: 'MX400 router',
  //     operations: 'edit',
  //     details: 'Licc',
  //     endOfLife: '23',
  //     endOfSupport: '44',
  //     endOfSale: '44',
  //     minCpu: '5gb',
  //     minRam: '6gb',
  //     minDiskSpace: '7gb',
  //   },
  //   {
  //     osVersion: 'v 4',
  //     platform: 'MX400 router',
  //     operations: 'edit',
  //     details: 'Be',
  //     endOfLife: '23',
  //     endOfSupport: '44',
  //     endOfSale: '44',
  //     minCpu: '5gb',
  //     minRam: '6gb',
  //     minDiskSpace: '7gb',
  //   },
  //   {
  //     osVersion: 'v 5',
  //     platform: 'MX400 router',
  //     operations: 'edit',
  //     details: 'B',
  //     endOfLife: '23',
  //     endOfSupport: '44',
  //     endOfSale: '44',
  //     minCpu: '5gb',
  //     minRam: '6gb',
  //     minDiskSpace: '7gb',
  //   },
  //   {
  //     osVersion: 'v 6',
  //     platform: 'MX400 router',
  //     operations: 'edit',
  //     details: 'C',
  //     endOfLife: '23',
  //     endOfSupport: '44',
  //     endOfSale: '44',
  //     minCpu: '5gb',
  //     minRam: '6gb',
  //     minDiskSpace: '7gb',
  //   },
  //   {
  //     osVersion: 'v 7',
  //     platform: 'MX400 router',
  //     operations: 'edit',
  //     details:
  //       ' dvcgsdfvhjbdshfvdbsfvhbfvshbfvsdhfvbsdfvhsdfbvhdhfhbvsdfvbsdfhbdshf dvcgsdfvhjbdshfvdbsfvhbfvshbfvsdhfvbsdfvhsdfbvhdhfhbvsdfvbsdfhbdshf dvcgsdfvhjbdshfvdbsfvhbfvshbfvsdhfvbsdfvhsdfbvhdhfhbvsdfvbsdfhbdshf',
  //     endOfLife: '23',
  //     endOfSupport: '44',
  //     endOfSale: '44',
  //     minCpu: '5gb',
  //     minRam: '6gb',
  //     minDiskSpace: '7gb',
  //   },
  //   {
  //     osVersion: 'v 8',
  //     platform: 'MX400 router',
  //     operations: 'edit',
  //     details: 'O',
  //     endOfLife: '23',
  //     endOfSupport: '44',
  //     endOfSale: '44',
  //     minCpu: '5gb',
  //     minRam: '6gb',
  //     minDiskSpace: '7gb',
  //   },
  //   {
  //     osVersion: 'v 9',
  //     platform: 'MX400 router',
  //     operations: 'edit',
  //     details: 'F',
  //     endOfLife: '23',
  //     endOfSupport: '44',
  //     endOfSale: '44',
  //     minCpu: '5gb',
  //     minRam: '6gb',
  //     minDiskSpace: '7gb',
  //   },
  //   {
  //     osVersion: 'v 10',
  //     platform: 'MX400 router',
  //     operations: 'edit',
  //     details: 'Ne',
  //     endOfLife: '23',
  //     endOfSupport: '44',
  //     endOfSale: '44',
  //     minCpu: '5gb',
  //     minRam: '6gb',
  //     minDiskSpace: '7gb',
  //   },
  // ];

  form = new FormGroup({
    platform: new FormControl('', Validators.required),
    osVersion: new FormControl('', Validators.required),
    endOfLife: new FormControl(new Date(), Validators.required),
    endOfSupport: new FormControl(new Date(), Validators.required),
    endOfSale: new FormControl(new Date(), Validators.required),
    minCpu: new FormControl('', Validators.required),
    minRam: new FormControl('', Validators.required),
    minDiskSpace: new FormControl('', Validators.required),
  });

  @ViewChild('mymodalChild', { static: false, read: ElementRef }) inRef;
  // @ViewChild('mymodalParent', { static: false, read: ElementRef }) ;

  addOsTemporarily() {
    console.log('vvvvvvvv', this.form);

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
    //  this.dialog.open()
    //     .open(this.dialogRef, {
    //       ariaLabelledBy: 'modal-basic-title',
    //       windowClass: 'modal-claass',
    //       size: 'lg',
    //     })
    //     .result.then(
    //       (result) => {
    //         this.closeResult = `Closed with: ${result}`;
    //       },
    //       (reason) => {
    //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //       }
    //     );
  }

  osUpgradeEdit(action, ele) {
    console.log('ediiiiiiiiiiii', ele);
    this.form.setValue({
      platform: ele.platform,
      osVersion: ele.osVersion,
      endOfLife: ele.endOfLife,
      endOfSupport: ele.endOfSale,
      endOfSale: ele.endOfSale,
      minCpu: ele.minCpu,
      minRam: ele.minRam,
      minDiskSpace: ele.minDiskSpace,
    });

    this.toggle = false;

    const dialogRef = this.dialog.open(this.dialogRef, {
      width: '850px',
      height: '500px',
      data: { name: 'this.name', animal: 'this.animal' },
    });
  }

  osUpgradeRemove(action, i, mymodalParent) {
    let choice = confirm('Are you sure you want to delete?');
    console.log('hhhhhhh', mymodalParent);
    if (i > -1) {
      this.dataSource.splice(i, 1);
      mymodalParent.renderRows();
    }
  }

  popUpRemove(action: string, index: number, mymodalChild) {
    let choice = confirm('Are you sure you want to delete?');

    if (index > -1) {
      this.dataPopUpAdd.splice(index, 1);
      mymodalChild.renderRows();
    }
  }

  popUpEdit(action: string, ele) {
    this.form.setValue({
      platform: ele.platform,
      osVersion: ele.osVersion,
      endOfLife: ele.endOfLife,
      endOfSupport: ele.endOfSale,
      endOfSale: ele.endOfSale,
      minCpu: ele.minCpu,
      minRam: ele.minRam,
      minDiskSpace: ele.minDiskSpace,
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
    console.log(this.dataPopUpAdd);
    this.dataSource = [...this.dataPopUpAdd, ...this.dataSource];
    this.dialog.closeAll();
    //this.dialog.dismissAll('Cross click');
    this.dataPopUpAdd = [];
  }

  ngOnInit(): void {
    this.dataSource = this.dataToDisplay;
    this.resultsLength = this.dataToDisplay.length;
  }
}
