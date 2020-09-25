export default class ThemeToggler {
  constructor(activatorId: string) {
    let el: HTMLElement = document.getElementById(activatorId) as HTMLElement;
    el.addEventListener("click", () => this._toggle(), false);
  }


  keep() {
    let isDarkThemeApplied: boolean = this._checkDarkThemeApplied()

    if (isDarkThemeApplied) {
      document.getElementsByTagName('body')[0].className = 'dark';
    } else {
      document.getElementsByTagName('body')[0].className = '';
    }
  }

  _toggle() {
    let isDarkThemeApplied: boolean = !this._checkDarkThemeApplied()

    if (isDarkThemeApplied) {
      document.getElementsByTagName('body')[0].className = 'dark';
    } else {
      document.getElementsByTagName('body')[0].className = '';
    }

    localStorage.setItem('darkTheme', JSON.stringify(isDarkThemeApplied));
  }

  _checkDarkThemeApplied(): boolean {
    return JSON.parse(localStorage.getItem('darkTheme') as string);
  }
}
