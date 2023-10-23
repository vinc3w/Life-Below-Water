class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = /*html*/`
			<link rel="stylesheet" href="/css/components/footer/style.css" />
			<footer>
				<div class="sub-footer">
					<div class="top">
						<section>
							<div class="heading"><span>Navigate</span></div>
							<ul>
								<li>
									<a href="/">
										<span class="fa fa-home"></span>Home
									</a>
								</li>
								<li>
									<a href="/views/about.html">
										<span class="fa fa-info-circle"></span>About
									</a>
								</li>
								<li>
									<a href="/views/news-updates.html">
										<span class="fa fa-file-text"></span>News & Updates
									</a>
								</li>
								<li>
									<a href="/views/resources.html">
										<span class="fa fa-book"></span>Resources
									</a>
								</li>
								<li>
									<a href="/views/support-us.html">
										<span class="fa fa-thumbs-up"></span>Support Us
									</a>
								</li>
								<li>
									<a href="/views/contact.html">
										<span class="fa fa-id-card"></span>Contact
									</a>
								</li>
								<li>
									<a href="/views/references.html">
										<span class="fa fa-asterisk"></span>References
									</a>
								</li>
							</ul>
						</section>
						<section>
							<div class="heading"><span>Contact</span></div>
							<ul>
								<li>
									<a href="https://www.instagram.com/ryantang2004/">
										<span class="fa-brands fa-instagram"></span>Instagram
									</a>
								</li>
								<li>
									<a href="https://www.facebook.com/tang.bryan.31">
										<span class="fa-brands fa-facebook"></span>Facebook
									</a>
								</li>
								<li>
									<a href="https://github.com/vinc3w/Life-Below-Water">
										<span class="fa-brands fa-github"></span>Github
									</a>
								</li>
							</ul>
						</section>
						<section>
							<div class="heading"><span>Support Us</span></div>
							<ul>
								<li>
									<a href="/views/support-us.html">
										<span class="fa fa-thumbs-up"></span>Donate
									</a>
								</li>
							</ul>
						</section>
					</div>
					<div class="bottom">
						<img class="logo" src="/res/icons/favicon-32x32.png" alt="fish logo" />
						<span class="made">@made by Group F</span>
					</div>
				</div>
			</footer>
		`;
	}
}

customElements.define("footer-component", Footer);
