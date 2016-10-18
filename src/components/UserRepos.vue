<template>
    <div>
        <h2>{{repos.length}} repositories</h2>
        <div v-for="(repo, index) in repos" key="index" class="thumbnail">
            <div class="caption">
                <h3>{{repo.name}}
                    <span class="badge">{{repo.stargazers_count}} STARS</span>
                </h3>
                <p>{{repo.description}}</p>
                <p>
                    <a :href="repo.html_url" class="btn btn-primary" role="button">Repository</a>
                    <a :href="repo.html_url + '/issues'" class="btn btn-default" role="button">Issues ({{repo.open_issues}}) </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['repos'],
    }
</script>
