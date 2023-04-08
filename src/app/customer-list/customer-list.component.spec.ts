import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { CustomerListComponent } from './customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],      
      declarations: [ CustomerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Adding a new customer should render in UI and the input Name should be initiated to blank', () => {

    const fakeName = 'Fake Name';

    const customerNameInput = fixture.debugElement.nativeElement.querySelector('input');
    customerNameInput.value = fakeName;
    customerNameInput.dispatchEvent(new Event('input'));

    
    const addCustmerButton = fixture.debugElement.nativeElement.querySelector('button');
    addCustmerButton.click();
    fixture.detectChanges();
    const customerList = fixture.debugElement.nativeElement.querySelector('.customer-index');
    expect(customerList?.innerText).toContain(fakeName);
    expect(customerNameInput.value).toBe('');
  });

  it('If the input name is blank and the button is clicked, then no customer should be added', () => {

    component.customers = [];

    const customerNameInput = fixture.debugElement.nativeElement.querySelector('input');
    customerNameInput.value = '';
    customerNameInput.dispatchEvent(new Event('input'));

    
    const addCustmerButton = fixture.debugElement.nativeElement.querySelector('button');
    addCustmerButton.click();
    fixture.detectChanges();
    const customerList = fixture.debugElement.nativeElement.querySelector('.customer-list');
    expect(customerList).toBeFalsy();
  });
});
