require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame
GITHUB_REPONAME = "aasare/aasare.github.com"


desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "aasare.github.io"
  })).process
end

desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    cp_r "aasare.github.io/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp

    system "git add ."
    message = "Regenerated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git push origin master --force"

    Dir.chdir pwd
  end
end
