<template>
    <body>

    <!--nav-->
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item href="#">User</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>

    <!-- Header -->
    <header id="header" class="alt">
        <div class="inner">
            <h1>Epilogue</h1>
            <p>A free responsive site template by <a href="https://templated.co">TEMPLATED</a></p>
        </div>
    </header>



    <!-- Wrapper -->
    <div id="wrapper">

        <!-- Banner -->
        <section id="intro" class="main">
            <span class="icon fa-diamond major"></span>
            <h2>Magna porta maximus</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae<br />
                malesuada turpis. Nam pellentesque in ac aliquam. Aliquam tempor<br />
                mi porta egestas maximus lorem ipsum dolor.</p>
            <ul class="actions">
                <li><a href="#" class="button big">Learn More</a></li>
            </ul>
        </section>

        <!-- Items -->
        <section class="main items">
            <article class="item">
                <header>
                    <a href="#"><img src="../assets/images/pic01.jpg" alt="" /></a>
                    <h3>Feugiat et faucibus</h3>
                </header>
                <p>Fusce malesuada efficitur venenatis. Pellentesque tempor leo sed massa hendrerit hendrerit. In sed feugiat est, eu congue elit. Ut porta magna vel felis sodales vulputate. Donec faucibus dapibus lacus non ornare.</p>
                <ul class="actions">
                    <li><a href="#" class="button">More</a></li>
                </ul>
            </article>
            <article class="item">
                <header>
                    <a href="#"><img src="../assets/images/pic02.jpg" alt="" /></a>
                    <h3>Blandit adipiscing</h3>
                </header>
                <p>Fusce malesuada efficitur venenatis. Pellentesque tempor leo sed massa hendrerit hendrerit. In sed feugiat est, eu congue elit. Ut porta magna vel felis sodales vulputate. Donec faucibus dapibus lacus non ornare.</p>
                <ul class="actions">
                    <li><a href="#" class="button">More</a></li>
                </ul>
            </article>
            <article class="item">
                <header>
                    <a href="#"><img src="../assets/images/pic03.jpg" alt="" /></a>
                    <h3>Lorem massa nulla</h3>
                </header>
                <p>Fusce malesuada efficitur venenatis. Pellentesque tempor leo sed massa hendrerit hendrerit. In sed feugiat est, eu congue elit. Ut porta magna vel felis sodales vulputate. Donec faucibus dapibus lacus non ornare.</p>
                <ul class="actions">
                    <li><a href="#" class="button">More</a></li>
                </ul>
            </article>
            <article class="item">
                <header>
                    <a href="#"><img src="../assets/images/pic04.jpg" alt="" /></a>
                    <h3>Ipsum sed tempus</h3>
                </header>
                <p>Fusce malesuada efficitur venenatis. Pellentesque tempor leo sed massa hendrerit hendrerit. In sed feugiat est, eu congue elit. Ut porta magna vel felis sodales vulputate. Donec faucibus dapibus lacus non ornare.</p>
                <ul class="actions">
                    <li><a href="#" class="button">More</a></li>
                </ul>
            </article>
        </section>

        <!-- CTA -->
        <section id="cta" class="main special">
            <h2>Etiam veroeros lorem</h2>
            <p>Phasellus ac augue ac magna auctor tempus proin<br />
                accumsan lacus a nibh commodo in pellentesque dui<br />
                in hac habitasse platea dictumst.</p>
            <ul class="actions">
                <li><a href="#" class="button big">Get Started</a></li>
            </ul>
        </section>

        <!-- Main -->
        <!--
            <section id="main" class="main">
                <header>
                    <h2>Lorem ipsum dolor</h2>
                </header>
                <p>Fusce malesuada efficitur venenatis. Pellentesque tempor leo sed massa hendrerit hendrerit. In sed feugiat est, eu congue elit. Ut porta magna vel felis sodales vulputate. Donec faucibus dapibus lacus non ornare. Etiam eget neque id metus gravida tristique ac quis erat. Aenean quis aliquet sem. Ut ut elementum sem. Suspendisse eleifend ut est non dapibus. Nulla porta, neque quis pretium sagittis, tortor lacus elementum metus, in imperdiet ante lorem vitae ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget neque id metus gravida tristique ac quis erat. Aenean quis aliquet sem. Ut ut elementum sem. Suspendisse eleifend ut est non dapibus. Nulla porta, neque quis pretium sagittis, tortor lacus elementum metus, in imperdiet ante lorem vitae ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </section>
        -->

        <!-- Footer -->
        <footer id="footer">
            <ul class="icons">
                <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="#" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
                <li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
            </ul>
            <p class="copyright">&copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a href="https://unsplash.com">Unsplash</a>.</p>
        </footer>

    </div>
    </body>
</template>

<script>
    export default {
        name: "All"
    }
</script>

<style scoped>

</style>