import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatCardModule,
  MatExpansionModule,
  MatPaginatorModule
} from '@angular/material';
import { MicrosoftUpdatesComponent } from 'app/components/microsoft-updates/microsoft-updates.component';
import { MicrosoftUpdatesListComponent } from 'app/components/microsoft-updates/microsoft-updates-list/microsoft-updates-list.component';
import { MicrosoftUpdatesFilterComponent } from 'app/components/microsoft-updates/microsoft-updates-filter/microsoft-updates-filter.component';
import { MicrosoftUpdateService } from 'app/services/microsoft-update.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    MicrosoftUpdatesComponent,
    MicrosoftUpdatesListComponent,
    MicrosoftUpdatesFilterComponent
  ],
  providers: [MicrosoftUpdateService]
})

export class AdminLayoutModule {}
