import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTable } from '@angular/material/table';

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
  @ViewChild('mymodal') maintable: MatTable<PeriodicElement>;
  @ViewChild('mymodalm') childtable: MatTable<PeriodicElement>;

  constructor(private modalService: NgbModal) {}

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
    'platformName',
    'operations',
    'details',
  ];

  states: string[] = ['a', 'b', 'c'];

  // dataToDisplay = [];
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

  form = new FormGroup({
    platform: new FormControl('', Validators.required),
    osVersion: new FormControl(''),
    endOfLife: new FormControl(),
    endOfSupport: new FormControl(),
    endOfSale: new FormControl(),
    minCpu: new FormControl('', Validators.required),
    minRam: new FormControl('', Validators.required),
    minDiskSpace: new FormControl('', Validators.required),
  });

  @ViewChild('mymodalm', { static: false, read: ElementRef }) inRef;

  addOsTemporarily() {
    console.log('vvvvvvvv', this.form);

    this.dataPopUpAdd = [this.form.value, ...this.dataPopUpAdd];
    this.form.reset();
  }

  addData(content: any) {
    this.toggle = false;

    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'modal-claass',
        size: 'lg',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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

  popUpRemove(action: string, index: number, mymodalm) {
    let choice = confirm('Are you sure you want to delete?');
    console.log('nnnnnnnn', mymodalm);
    if (index > -1) {
      this.dataPopUpAdd.splice(index, 1);
      mymodalm.renderRows();
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

  submit() {
    console.log(this.dataPopUpAdd);
    this.dataSource = [...this.dataPopUpAdd, ...this.dataSource];
    this.modalService.dismissAll('Cross click');
    this.dataPopUpAdd = [];
  }

  ngOnInit(): void {
    this.dataSource = this.dataToDisplay;
  }
}
