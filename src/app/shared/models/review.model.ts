export class Review{

    constructor(
        public id?: number,
        public reviewee?: string,
        public selectionDueOn?: any,
        public reviewersNominated?: Array<string>,
        public status?: string,
        public waitingOn?: string
    ){}
}