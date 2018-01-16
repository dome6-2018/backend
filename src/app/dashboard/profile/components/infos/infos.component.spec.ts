/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProfileInfosComponent} from './infos.component';

describe('ProfileInfosComponent', () => {
    let component: ProfileInfosComponent;
    let fixture: ComponentFixture<ProfileInfosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileInfosComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileInfosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
