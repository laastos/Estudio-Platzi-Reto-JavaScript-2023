import { Node } from "./node.js";

export class Playlist {
  constructor() {
    this.top = null;
    this.botttom = null;
    this.length = 0;
  }

  addSong(song) {
    let newNode = new Node(song);
    if (this.length === 0) {
      this.top = newNode;
      this.botttom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  playSong() {
    if (this.length === 0) {
      throw Error("No hay canciones en la lista");
    }
    let tempNode = JSON.parse(JSON.stringify(this.top));
    this.top = this.top.next;
    this.length--;
    if (this.length === 0) {
      this.botttom = null;
    }
    return tempNode.value;
  }

  getPlaylist() {
    let array = [];
    let actualNode = this.top;
    while (actualNode != null) {
      array.push(actualNode.value);
      actualNode = actualNode.next;
    }
    return array;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// Tests
// Test 1
console.log('Test 1: Crear lista de reproduccion y ejecutarla');
let playlist = new Playlist();
playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");
let calculated = playlist.playSong();
let output = "Hotel California";
let assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}

calculated = playlist.playSong();
output = "Stairway to Heaven";
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}

calculated = playlist.playSong();
output = "Bohemian Rhapsody";
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}

// Test 2
console.log('Test 2: Crear lista de reproduccion y obtenerla');
playlist = new Playlist();
playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");
calculated = playlist.getPlaylist();
output = ["Hotel California", "Stairway to Heaven", "Bohemian Rhapsody"];
assertion = JSON.stringify(output) === JSON.stringify(calculated);
if (assertion) {
  console.log("Assertion passed");
} else {
  console.log(`Result: ${JSON.stringify(calculated)}`);
  console.log(`Assertion failed: Result should be ${JSON.stringify(output)}`);
}
