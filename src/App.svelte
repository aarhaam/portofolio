<script>

  // layout
  import Index from "./layout/Index.svelte";

  import {Router, Route} from "svelte-routing";

  // pages
  import Home from "./pages/Home.svelte";
  import Portfolio from "./pages/Portfolio.svelte";


</script>

<main>
  <Router>
    <Index>
      <Route path="/" component="{Home}"/>
      <Route path="/portfolio" component="{Portfolio}"/>
    </Index>
  </Router>
</main>

