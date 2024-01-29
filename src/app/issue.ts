/**
 * completed property is the date that an issue is resolved.
 * New issue will not have this property set.
 *
 */

export interface Issue {
  issueNo: number;
  title: string;
  description: string;
  priority: 'low' | 'high';
  type: 'Feature' | 'Bug' | 'Documentation';
  completed?: Date;
}
