const App = {
  data() {
    return {
      title: "Programmer memes",
      subTitle: "Form registration for mem's author",
      isDisabledButton: false,
      timer: "",
      // timerPercentage: "",
      timerTime: 15000, // 120000; 15000
      deadline: null,
      currentTimer: null,
    };
  },
  created() {
    this.deadline = new Date().getTime() + this.timerTime;
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.currentTimer = setInterval(this.updateTimer, 500);
    },
    updateTimer() {
      const date = new Date().getTime();
      const timeRemaining = (this.deadline - date) / 1000;
      const minutes = Math.floor((timeRemaining / 60) % 60);
      const seconds = Math.floor(timeRemaining % 60);

      const fMinutes = minutes < 10 ? "0" + minutes : minutes;
      const fSeconds = seconds < 10 ? "0" + seconds : seconds;

      if (timeRemaining <= 1) {
        clearInterval(this.currentTimer);
        this.isDisabledButton = true;
      }

      this.timer = `${fMinutes}:${fSeconds}`;
      console.log("this.timer: ", this.timer);
      // this.timerPercentage =
      //   100 - Math.floor((timeRemaining * 1000 * 100) / this.timerTime);
    },
  },
};

const app = Vue.createApp(App);

app.mount("#app");
