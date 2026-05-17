class winActionClass {
    constructor() {
        this.clicks = Array(9);
    }

    addClick(indexOfClick, hoIsMotion) {
        this.hoIsMotion = hoIsMotion

        if (this.hoIsMotion === 'tick') {
            this.clicks[indexOfClick] = 'tick'
        } else {
            this.clicks[indexOfClick] = 'cross'
        }
        console.log(this.clicks)
    }

    isWhoseWinner(hoIsMotion) {
        let isWin = false
        for (let i = 0; i < this.clicks.length - 1; i++) {
            if (i === 0 && this.clicks[0] === hoIsMotion) {
                if (this.clicks[1] === hoIsMotion && this.clicks[2] === hoIsMotion) {
                    isWin = true
                    break
                }

                if (this.clicks[3] === hoIsMotion && this.clicks[6] === hoIsMotion) {
                    isWin = true
                    break
                }
            }
            if (i === 2 && this.clicks[2] === hoIsMotion) {
                if (this.clicks[5] === hoIsMotion && this.clicks[8] === hoIsMotion) {
                    isWin = true
                    break
                }
            }
            if (i === 4 && this.clicks[4] === hoIsMotion) {
                if (this.clicks[3] === hoIsMotion && this.clicks[5] === hoIsMotion) {
                    isWin = true
                    break
                }
                if (this.clicks[1] === hoIsMotion && this.clicks[7] === hoIsMotion) {
                    isWin = true
                    break
                }
                if (this.clicks[0] === hoIsMotion && this.clicks[8] === hoIsMotion) {
                    isWin = true
                    break
                }
                if (this.clicks[6] === hoIsMotion && this.clicks[2] === hoIsMotion) {
                    isWin = true
                    break
                }
            }
            if (i === 6 && this.clicks[6] === hoIsMotion) {
                if (this.clicks[7] === hoIsMotion && this.clicks[8] === hoIsMotion) {
                    isWin = true
                    break
                }
            }
        }

        return isWin;
    }
}

const winAction = new winActionClass();

export default winAction;