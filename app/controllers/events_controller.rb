require_relative "../models/tag"
class EventsController < ApplicationController

  def index
    @events = Event.all
    @params = ActsAsTaggableOn.default_parser.new([params[:topics],params[:days],params[:times],params[:frequencies]]).parse
    @topics = tag_data(params[:topics],'topics')
    @days  = tag_data(params[:days],'days')
    @times = tag_data(params[:times],'times')
    @frequencies  = tag_data(params[:frequencies],'frequencies')

    respond_to do |format|
      format.html  { expires_in 1.day, :public => true } # index.html.erb
      format.json  { render :json => @events }
      format.rss { render :layout => false }
    end
  end

  def show
    @event = Event.find(params[:id])

    respond_to do |format|
      format.html  { expires_in 1.year, :public => true } # show.html.erb
      format.json  { render :json => @event }
      format.png {
        expires_in 1.year, :public => true
        send_data Base64.decode64(@event.image_binary), :type => @event.image_content_type, :disposition => 'inline'
      }
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:name, :id, :topic_list, :time_list, :day_list, :frequency_list)
    end
end
