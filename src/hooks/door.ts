export function useDoor() {
  const openDoor = () => {
    const door = document.getElementsByClassName("door");
    if (door.length > 0) {
      for (let i = 0; i < door.length; i++) {
        door[i].classList.add("open");
      }
    }
  };

  const closeDoor = () => {
    const door = document.getElementsByClassName("door");
    if (door.length > 0) {
      for (let i = 0; i < door.length; i++) {
        door[i].classList.remove("open");
      }
    }
  };

  return { openDoor, closeDoor };
}
