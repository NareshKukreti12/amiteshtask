import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRepService } from 'src/app/api-rep.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  isAddNew: boolean = false;
  isUpdate: boolean = false;

  selectedRowId;

  catdetails: any = [];
  catFilteredDetails: any = [];
  selectedIndex = 0;
  myForm: FormGroup;
  catName;
  formDetails: any;
  formControlValue = '';
  selectedStudyType = -1;
  categories = [];
  alt_medicine_types = ''; cam = ''; title = ''; sponser_name = ''; sponsor_protocol_no = ''; population_age = '';
  actual_enrollment = 0; start_date; phase = ''; db_link = ''; statusIndex; cat_id
  studyTypeId = -1; statusId = -1;
  config
  isClicked = 0
  public value: Date = new Date();
  public format = 'MM/dd/yyyy';
  constructor(public router: Router,
    public apiRep: ApiRepService,
    public formBuilder: FormBuilder,
    public confirmDialog: ConfirmationDialogService,
    public route: ActivatedRoute) {

    this.config = {
      firstDayOfWeek: 'su',
      monthFormat: 'MMM, YYYY',
      disableKeypress: false,
      allowMultiSelect: false,
      closeOnSelect: undefined,
      closeOnSelectDelay: 100,
      onOpenDelay: 0,
      weekDayFormat: 'ddd',
      appendTo: document.body,
      drops: 'down',
      opens: 'right',
      showNearMonthDays: true,
      showWeekNumbers: false,
      enableMonthSelector: true,
      format: "YYYY-MM-DD",
      yearFormat: 'YYYY',
      showGoToCurrent: true,
      dayBtnFormat: 'DD',
      monthBtnFormat: 'MMM',
      hours12Format: 'hh',
      hours24Format: 'HH',
      meridiemFormat: 'A',
      minutesFormat: 'mm',
      minutesInterval: 1,
      secondsFormat: 'ss',
      secondsInterval: 1,
      showSeconds: false,
      showTwentyFourHours: true,
      timeSeparator: ':',
      multipleYearsNavigateBy: 10,
      showMultipleYearsNavigation: false,
      // min:'2017-08-29 15:50',
      // minTime:'2017-08-29 15:50'
    };


    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        if (this.router.getCurrentNavigation().extras.state == null) {
          this.router.navigate(['home']);
          return;
        }
        this.catdetails = this.router.getCurrentNavigation().extras.state.catdetails;
        this.catFilteredDetails = this.router.getCurrentNavigation().extras.state.catdetails;
        this.catName = this.router.getCurrentNavigation().extras.state.catname;
        this.cat_id = this.router.getCurrentNavigation().extras.state.cat_id
        console.log("->", this.catdetails)
      }
    });
  }

  validateForm() {
    if (

      this.alt_medicine_types.length == 0 ||
      this.cam.length == 0 ||
      this.title.length == 0 ||
      this.sponser_name.length == 0 ||
      this.sponsor_protocol_no.length == 0 ||
      this.population_age.length == 0 ||
      this.studyTypeId <= 0 ||
      this.actual_enrollment == 0 ||
      this.start_date == null ||
      this.phase.length == 0 ||
      this.db_link.length == 0 ||
      this.statusId <= 0) {
      return true
    }

    else {
      return false
    }

  }
  // "alt_medicine_types": "Acupuncture4",
  // "cam": "Acupuncture",
  // "title": "A clinical study on the effect of acupuncture and moxibustion on intervening the anxiety and depression of healthy people caused by public health emergencies based on acupoint sensitization",
  // "sponser_name": "The Second Affiliated Hospital of Guizhou University of Traditional Chinese Medicine",
  // "sponsor_protocol_no": "GCT052000030828. ChiCTR2000030828. ChiMCTR2000003115",
  // "population_age": "18-75 Years",
  // "study_type": 1,
  // "actual_enrollment": 60,
  // "start_date": "2020-03-15",
  // "phase": "1",
  // "db_link": "https://search.globalclinicaltrialsdata.com/trial/GCT052000030828",
  // "status": 1,
  // "cat_id": 1,



  findChoices(searchText: string) {
    alert("-->")
    return this.categories.filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  getChoiceLabel(choice: string) {
    return `@${choice} `;
  }
  ngOnInit(): void {

    this.categories.push(
      {
        displayText: 'Alternative medicine types',
        colName: 'alt_medicine_types'
      },
      {
        displayText: 'Complementary and alternative medicine (CAM)',
        colName: 'cam'
      },
      {
        displayText: 'Full title of clinical trial',
        colName: 'title'
      },
      {
        displayText: 'Sponsor name',
        colName: 'sponser_name'
      },
      {
        displayText: 'Sponsor protocol number/ID',
        colName: 'sponsor_protocol_no'
      },
      {
        displayText: 'Population age',
        colName: 'population_age'
      },
      {
        displayText: 'Study type',
        colName: 'study_type'
      },
      {
        displayText: 'Actual enrollment',
        colName: 'actual_enrollment'
      },

      {
        displayText: 'Status',
        colName: 'study_type'

      }
    )
  }
  keyPress(ev) {
    console.log("Key press", this.selectedIndex, this.formControlValue)
    if (this.formControlValue.length == 0) {
      this.catFilteredDetails = this.catdetails;
    }
    else {
      console.log("Selcted index", this.selectedIndex)
      if (this.selectedIndex == 0) {
        this.catFilteredDetails = this.catdetails.filter((item) => {
          return (
            item.alt_medicine_types.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1 ||
            item.cam.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1 ||
            item.title.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1 ||
            item.sponser_name.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1 ||
            item.sponsor_protocol_no.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1 ||
            item.population_age.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1 ||
            item.study_type.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1 ||
            item.actual_enrollment.toString().indexOf(this.formControlValue.toLowerCase()) > -1 ||
            item.status_type.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1
          );
        })
      }
      else {
        let index = this.selectedIndex - 1;
        if (index == 0) {
          this.catFilteredDetails = this.catdetails.filter((item) => {
            return (
              item.alt_medicine_types.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1
            );
          })
        }
        else if (index == 1) {
          this.catFilteredDetails = this.catdetails.filter((item) => {
            return (
              item.cam.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1
            );
          })
        }
        else if (index == 2) {
          this.catFilteredDetails = this.catdetails.filter((item) => {
            return (

              item.title.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1
            );
          })
        }
        else if (index == 3) {
          this.catFilteredDetails = this.catdetails.filter((item) => {
            return (
              item.sponser_name.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1
            )
          })
        }
        else if (index == 4) {
          this.catFilteredDetails = this.catdetails.filter((item) => {
            return (

              item.sponsor_protocol_no.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1

            );
          })
        }
        else if (index == 5) {
          this.catFilteredDetails = this.catdetails.filter((item) => {
            return (
              item.population_age.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1

            );
          })
        }
        else if (index == 6) {
          this.catFilteredDetails = this.catdetails.filter((item) => {
            return (
              item.study_type.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1
            );
          })
        }
        else if (index == 7) {
          this.catFilteredDetails = this.catdetails.filter((item) => {
            return (
              item.actual_enrollment.toString().indexOf(this.formControlValue.toLowerCase()) > -1
            );
          })
        }
        else if (index == 8) {
          this.catFilteredDetails = this.catdetails.filter((item) => {
            return (

              item.status_type.toLowerCase().indexOf(this.formControlValue.toLowerCase()) > -1
            );
          })
        }
      }
      console.log(this.catFilteredDetails)
    }
    //  console.log(filterItems)
  }
  changeCat(ev: any) {
    console.log("Changed", ev.target.selectedIndex);
    this.selectedIndex = ev.target.selectedIndex
  }
  SelectStudyType(item, i) {
    this.selectedStudyType = i;
    this.studyTypeId = item.id;
  }
  changeClass(i) {
    if (i == this.selectedStudyType) {
      return { 'prod_cat-trans': false, 'prod_cat': true }
    }
    else {
      return { 'prod_cat-trans': true, 'prod_cat': false }
    }
  }
  submitForm() {
    console.log(this.myForm)
  }
  SelectStatusType(item, i) {
    this.statusIndex = i;
    this.statusId = item.id;
    console.log(this.statusId)
  }
  changeStatusClass(i) {
    if (i == this.statusIndex) {
      return { 'prod_cat-trans': false, 'prod_cat': true }
    }
    else {
      return { 'prod_cat-trans': true, 'prod_cat': false }
    }
  }

  BindData(res) {
    this.catdetails = res;
    this.catFilteredDetails = res;
    this.isClicked = 0;
    this.isUpdate = false;
    this.isAddNew = false
  }

  SaveDetails() {
    this.isClicked = 1;
    let body = {
      "alt_medicine_types": this.alt_medicine_types,
      "cam": this.cam,
      "title": this.title,
      "sponser_name": this.sponser_name,
      "sponsor_protocol_no": this.sponsor_protocol_no,
      "population_age": this.population_age,
      "study_type": this.studyTypeId,
      "actual_enrollment": this.actual_enrollment,
      "start_date": this.start_date,
      "phase": this.phase,
      "db_link": this.db_link,
      "status": this.statusId,
      "cat_id": this.cat_id,
      id: this.selectedRowId
    }
    console.log(body);
    if (this.isUpdate == false) {
      this.apiRep.addCatDetails(body).subscribe(res => {
        this.BindData(res);
      }, err => {
        this.isClicked = 0;
      })
    }
    else {
      this.apiRep.updateCatDetails(body).subscribe(res => {

        this.apiRep.getDetailsById(this.cat_id).subscribe(res => {
          this.BindData(res);
          //   let navigationExtras: NavigationExtras = { state: { catdetails: res,catname:cat.cat_name,cat_id:catId } };
          // this.router.navigate(['details'], navigationExtras);
        })
      }, (err) => {

      })
    }
  }

  back() {
    this.isUpdate = false;
    this.isAddNew = false;
  }
  CheckDisStatus(){
    if(this.isUpdate==false && this.isAddNew==false){
      return{
        'display-block':true,
        'display-none':false
      }
    }
    else{
      return{
        'display-block':false,
        'display-none':true
      }
    }
  }
  AddNewRow() {
    this.isAddNew = true;
  }
  Edit(item) {

    this.isUpdate = true;
    console.log(item);

    this.alt_medicine_types = item.alt_medicine_types;
    this.cam = item.cam;
    this.title = item.title;
    this.sponser_name = item.sponser_name;
    this.sponsor_protocol_no = item.sponsor_protocol_no;
    this.population_age = item.population_age;
    this.actual_enrollment = item.actual_enrollment;
    this.start_date = item.start_date;
    this.phase = item.phase;
    this.db_link = item.db_link;
    this.statusId = item.status_id;
    this.studyTypeId = item.study_type_id;
    this.selectedRowId = item.id;
    this.statusIndex = this.apiRep.statusTypes.findIndex(obj => obj.id == item.status_id);
    this.selectedStudyType = this.apiRep.studyTypes.findIndex(obj => obj.id == item.study_type_id);  
  }
  confirm(item) {
    // this.confirmDialog.confirm();

    // let message=item.is_active==1?'Do you really want to mark '

    this.confirmDialog.confirm('Message', 'Are you sure?')
      .then((confirmed) => {
        console.log(confirmed);
        if (confirmed == true) {
         this.DeleteRow(item.id)
          // this.removeCategory(item.cat_id,item.is_active);
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  DeleteRow(id){
    let index=this.catFilteredDetails.findIndex(obj=>obj.id==id);
    this.catFilteredDetails.splice(index,1)
    this.apiRep.deleteRow(id).subscribe(res=>{
      this.apiRep.getDetailsById(this.cat_id).subscribe(res => {
        this.BindData(res);
        //   let navigationExtras: NavigationExtras = { state: { catdetails: res,catname:cat.cat_name,cat_id:catId } };
        // this.router.navigate(['details'], navigationExtras);
      })
    })
  }
}
