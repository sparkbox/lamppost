class Blacklist
  @@blacklist_words = YAML::load(File.open("#{::Rails.root.to_s}/config/blacklist.yml"))

  def self.approved?(word)
    return true if word.nil?

    approved = true

    @@blacklist_words.each do |blacklist_word|
      if word.upcase.include? blacklist_word.upcase
        approved = false
      end
    end

    approved
  end

end
