class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = /*html*/`
			<link rel="stylesheet" href="/css/components/header/style.css" />
			<header>
				<div class="sub-header">
					<div class="top">
						<a href="/"><img class="logo" src="/res/images/logo.png" alt="" /></a>
						<div class="input">
							<form action="/views/news.html">
								<input type="text" name="news" placeholder="Search news..."/>
								<button type="submit"><span class="fa fa-search"></span></button>
							</form>
							<a href="/views/contact.html">Contact Us?</a>
						</div>
					</div>
					<nav class="bottom nav">
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/views/about.html">About</a></li>
							<li><a href="/views/news.html">News & Updates</a></li>
							<li><a href="/views/resources.html">Resources</a></li>
							<li><a href="/views/support-us.html">Support Us</a></li>
							<li><a href="/views/contact.html">Contact</a></li>
						</ul>
					</nav>
				</div>
			</header>
		`;
	}
}

customElements.define("header-component", Header);
