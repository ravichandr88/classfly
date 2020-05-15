import { 
    MatSidenavModule,
    MatButtonModule 
    ,MatDialogModule
    ,MatCardModule
    ,MatDividerModule
    ,MatIconModule,
    MatFormFieldModule
    ,MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatProgressSpinnerModule} from '@angular/material';
    import {MatRadioModule} from '@angular/material/radio'; 
import { NgModule } from '@angular/core';
// import {MatSidenavModule} from '@angular/material/sidenav';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';


// import {FormGroup,FormBuilder} from '@angular/forms'


@NgModule({
    imports:[MatButtonModule ,
         MatDialogModule ,
          MatSidenavModule,
          MatCardModule,
          ScrollDispatchModule,
          MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
    MatDividerModule,
    MatRadioModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    ],


    exports:[MatButtonModule ,
         MatDialogModule , 
         MatSidenavModule,
         MatCardModule,
         MatRadioModule,
         ScrollDispatchModule,
         MatFormFieldModule,
         MatIconModule,
         MatSelectModule,
        MatDividerModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatListModule,
        MatToolbarModule,
        MatGridListModule,
        MatProgressSpinnerModule,
    ]
})

export class  MyModule{

}