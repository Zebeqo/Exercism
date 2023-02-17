export class Clock {
  hour: number;
  minute: number;
  constructor(hour = 0, minute = 0) {
    const minuteDivision = Math.floor(minute / 60);
    const hourRemainder = (hour + minuteDivision) % 24;
    const minuteRemainder = minute % 60;
    this.hour = hourRemainder < 0 ? 24 + hourRemainder : hourRemainder;
    this.minute = minuteRemainder < 0 ? 60 + minuteRemainder : minuteRemainder;
  }

  public toString(): string {
    return `${this.hour.toString().padStart(2, "0")}:${this.minute
      .toString()
      .padStart(2, "0")}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes);
  }

  public equals(other: Clock): boolean {
    return this.minute === other.minute && this.hour === other.hour;
  }
}
