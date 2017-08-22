class TextCorrect

  def self.process(string)
    result = nil
    Open3.popen3('php -f ./lib/php/sujest/index.php "' + string + '"') do |stdin, stdout, stderr|
      result = stdout.read
    end
    result
  end
end