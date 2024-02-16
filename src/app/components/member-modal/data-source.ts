import { CollectionViewer, DataSource } from '@angular/cdk/collections';

// MOELO
import { User } from '../../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceUser extends DataSource<User> {
  data = new BehaviorSubject<User[]>([]);
  originalData: User[] = [];

  connect(): Observable<User[]> {
    return this.data;
  }

  init(users: User[]) {
    this.originalData = users;
    this.data.next(users);
  }

  find(query: string) {
    const newUsers = this.originalData.filter(
      (item) =>
        item.email.toLowerCase().includes(query.toLowerCase()) ||
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    this.data.next(newUsers);
  }

  disconnect() {}
}
