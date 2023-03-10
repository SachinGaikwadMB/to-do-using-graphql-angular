import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_ALLTODOTASKS = gql`
  {
    getAllToDoTasks {
      id
      title
      isCompleted
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private apollo: Apollo) {}

  public getAllToDoTasksData()  {
    return this.apollo.watchQuery({
      query: GET_ALLTODOTASKS,
      fetchPolicy:'network-only'
    });
  }

  public addToDoTask(toDoTaskTitle: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation {
          saveItem(
            toDoTaskModel: {
              title: "${toDoTaskTitle}"
              isCompleted: false
              isFavorite: false
            }
          ) {
            title
          }
        }
      `,
      fetchPolicy:'network-only'
    });
  }

  public deleteToDoTask(id: number) {
    return this.apollo.mutate({
      mutation: gql`
      mutation {
        deleteToDoTask(id: ${id})
      }
    `,
    fetchPolicy:'network-only'
    });
  }


  public updateToDoTask(id : number, isCompleted : boolean) {
    return  this.apollo.mutate({
      mutation:gql` mutation  {
        updateToDoTask(id : ${id}, isCompleted:${isCompleted}) 
      }`,
     
      fetchPolicy:'network-only'
    })
  }

}
