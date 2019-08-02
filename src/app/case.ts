export class Case {
    constructor (
        public id: number,
        public short_description: string,
        public contact_type: string,
        public priority: string,
        public contact: string,
        public account: string,
        public impact: string,
        public category: string,
        public state: string,
        public case_number: string
    ) {}
}
