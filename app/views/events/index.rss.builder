xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Lamp-Post"
    xml.description "A place where events gather"
    xml.link root_url
    xml.lanuage "en-us"  
    @events.each do |event|
      xml.item do
        xml.title event.name
        xml.description event.description
      end
    end
  end
end
