export class Review{

    constructor(
        public id?: number,
        public reviewee?: string,
        public revieweeRole?: string,
        public selectionDueOn?: any,
        public startedOn?: any,
        public reviewersNominated?: Array<string>,
        public status?: string,
        public waitingOn?: string
    ){}
}