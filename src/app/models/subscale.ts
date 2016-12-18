export class Subscale {
    private _id: number;
    private _name: string;
    private _order: number;


    constructor(id: number, name: string, order: number) {
        this._id = id;
        this._name = name;
        this._order = order;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get order(): number {
		return this._order;
	}

	public set order(value: number) {
		this._order = value;
	}

}