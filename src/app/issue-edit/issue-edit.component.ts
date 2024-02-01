import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';
import { IssueForm } from '../issue-form';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css'],
})
export class IssueEditComponent implements OnInit {
  @Input() issue: Issue | undefined;
  @Output() formClose = new EventEmitter();
  issueForm: FormGroup<IssueForm> | undefined;

  constructor(
    private builder: FormBuilder,
    private issueService: IssuesService
  ) {}

  ngOnInit(): void {
    if (this.issue) {
      this.issueForm = this.builder.group<IssueForm>({
        title: new FormControl(this.issue.title, {
          nonNullable: true,
          validators: Validators.required,
        }),
        description: new FormControl(this.issue.description, {
          nonNullable: true,
        }),
        priority: new FormControl(this.issue.priority, {
          nonNullable: true,
          validators: Validators.required,
        }),
      });
    }
  }

  save() {
    if (this.issue) {
      this.issueService.updateIssue(
        this.issue.issueNo,
        this.issueForm?.getRawValue() as Issue
      );
      this.formClose.emit();
    }
  }
}
