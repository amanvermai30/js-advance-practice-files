// 1. Slot
// - slot:[start, end];

// 2. Slots
// slots: slot[]
// - add
// - delete
// - isAvailable
// - size

// 3.Meeting room
// - name: string
// - capacity: number
// - slots: slots
// - availabeleSlots:[];
// - addSlots
// - deleteslots
// - isAvailable
// - setAvailableSlots

// 4. Floors
// - name: string
// - meetingRooms: meetingRoom[];
// - addMeetingRoom
// - doesMeetingRoomExist
// - deleteMeetingRoom

// 5.Building
// - name
// - floors: floor[]
// - addFloor
// - doesFloorExist
// - deleteFloor



// ------------------------- slot ------------------------

class Slot{
    #slot;
    constructor(start,end){
        this.#slot = [start,end];

    }

    get start(){
        return this.#slot[0];
    }
    get end(){
        return this.#slot[1];
    }
}

// let s1 = new slot(1,2);
// console.log(s1)


//------------- ------- slots ----------------------------

class Slots{
    #slots;
    constructor(){
        this.#slots = [];
    }

    get Slots(){
        return this.#slots;
    }

    get size(){
        return this.#slots.length;
    }
    
    add(){
        if( this.isAvailable(slot.start, slot.end)){
            this.#slots.push(slot);
        }

    }

    isAvailable(start,end){
        for( let slot of this.#slots){
            if( start < slot.end && end > slot.start){
                return false;
            } 
        }
        return true;

    }

    listOFSlots(){
        for( let slot of this.#slots){
            console.log(`Starting Time:- ${slot.start} Ending Time ${slot.end}`);
        }
    }

    deleteSlot(slot){
        for( let i = 0; i < this.#slots.length; i++ ){

            if( slot.start == this.#slots[i].start && slot.end == this.#slots[i].end ){
                this.#slots.splice(i,1);
                return true;
            }
        }
        return false;

    }
}



// ------------- Meeting room components --------------------

class MeetingRoom{
    #name;
    #capacity;
    #slots;
    #availableSlot;

    constructor(name,capacity){
        this.name = name;
        this.capacity = capacity;
        this.slots = new Slots();
    }

    get name(){
        return this.#name;
    }

    get capacity(){
        return this.#capacity;
    }

    get slots(){
        return this.#slots;
    }

    get availableSlot(){
        return this.#availableSlot;
    }
}

// ---------------------------------floors---------------------------------
class Floor{
    #name;
    #meetingRoom;

    constructor(name){
        this.name = name;
        this.#meetingRoom = [];
    }

    addMeetingRoom(newRoom){
        this.#meetingRoom.push(newRoom);

    }

    deleteMeetingRoom(name){
        for( let i = 0; i < this.#meetingRoom.length; i++ ){
            if( this.#meetingRoom[i].name === name){
                this.#meetingRoom.splice(i,1);

            }
        }
        return false;

    }
}



// ----------------------------buildings ---------------------------

class Building{
    #name;
    #floors;

    constructor(name){
        this.#name = name;
        this.#floors = [];
    }

    get name(){
        return this.#name;
    }

    get floor(){
        return this.#floors;
    }

    addFloor(newfloor){
        this.#floors.push(newfloor)
    }
    
    deleteFloor(name){
        for( let i = 0; i < this.#floors.length; i++ ){
            if(this.#floors[i].name === this.name){
                this.#floors.splice(i,1);

            }
        }
        return false;
    }

    getFloorByName(name){
        return this.#floors.find((el)=> el.name === name);
    }

}
