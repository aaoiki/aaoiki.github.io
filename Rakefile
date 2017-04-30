require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"

BUILD_PATH = "aaoiki.github.io"

task default: %w[publish]

desc "Build the blog"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => BUILD_PATH
  })).process
end

desc "Publish the blog to the world"
task :publish => [:generate] do
  Dir.chdir BUILD_PATH do
    system "git add ."
    message = "Regenerated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git push origin master --force"

    system "pwd"
  end
end

desc "Serve All: Run Jekyll server with full options"
task :sa do
  exec "jekyll serve --watch --drafts --future"
end
