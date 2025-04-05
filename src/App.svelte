<script>
  import cropFavicon from "./utils/favicon";

  cropFavicon();

  const name = "Diego Revenga";
  const email = "diegorevengagonzalez@gmail.com";
  const linkedin = "https://www.linkedin.com/in/diegorevenga/";
  const github = "https://github.com/DiegoRevenga/";
</script>

<main>
  <h1>{name}</h1>
  <p class="description">
    Software Engineer
    <br>
    Madrid, Spain
  </p>
  <div class="links">
    <a href="{`mailto:${email}`}" target="_blank">Email</a>
    <a href="{linkedin}" target="_blank">LinkedIn</a>
    <a href="{github}" target="_blank">GitHub</a>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  .description {
    text-align: center;
    margin: 1rem;
  }

  a {
    text-decoration: underline;
  } 

  .links {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
</style>
